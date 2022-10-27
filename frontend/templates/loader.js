const DysonLoader = () => {
    console.log("DysonLoader is experimental and may change without warning")
    return Promise.all([{% for path in script_paths %}import("{{ path | escapejs }}"),{% endfor %}]).then(() => {
    window.dysonVueStore.dispatch("common/env/init")
    })
};
