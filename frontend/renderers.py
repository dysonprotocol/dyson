from rest_framework import renderers
from rest_framework.renderers import TemplateHTMLRenderer


class RawRenderer(renderers.BaseRenderer):
    media_type = "*/*"
    render_style = "binary"
    format = "raw"

    def render(self, data, accepted_media_type=None, renderer_context=None):
        return data


class BetterTemplateHTMLRenderer(TemplateHTMLRenderer):
    def get_template_names(self, response, view):
        if response.template_name:
            return [response.template_name]
        elif self.template_name:
            return [self.template_name]
        elif hasattr(view, "get_template_names"):
            return view.get_template_names()
        elif hasattr(view, "template_name"):
            return [view.template_name]
        if hasattr(view, "action"):
            return [
                f"{ view.__class__.__name__ }_{ view.action.lower() }.html",
            ]
        return [
            f"{ view.__class__.__name__ }_{ view.request.method.lower() }.html",
        ]

    def get_template_context(self, data, renderer_context, template_names=None):
        view = renderer_context["view"]
        serializer = None
        if hasattr(view, "get_serializer"):
            serializer = view.get_serializer(data=renderer_context["request"].data)
            if hasattr(serializer, "initial_data"):
                serializer.is_valid()
        response = renderer_context["response"]
        return {
            "data": data,
            "status_code": response.status_code,
            "serializer": serializer,
            "excpetion": response.exception,
            "template_names": template_names,
        }

    def render(self, data, accepted_media_type=None, renderer_context=None):
        renderer_context = renderer_context or {}
        view = renderer_context["view"]
        request = renderer_context["request"]
        response = renderer_context["response"]
        template_names = None
        if response.exception:
            template = self.get_exception_template(response)
        else:
            template_names = self.get_template_names(response, view)
            template = self.resolve_template(template_names)
        context = self.get_template_context(
            data, renderer_context, template_names=template_names
        )
        return template.render(context, request=request)
