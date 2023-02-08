const DysonLoader = () => {
    console.log("DysonLoader is experimental and may change.")
    return Promise.all([{% for path in script_paths %}import("{{ path | escapejs }}"),{% endfor %}]).then(() => {
        return window.dysonVueStore.dispatch("common/env/init")
    })
};
