const DysonLoader = () => {
    console.log("DysonLoader is loading...")
    return Promise.all([{% for path in script_paths %}import("{{ path | escapejs }}"),{% endfor %}]).then(() => {
        console.log("DysonLoader is initializing...")
        return window.dysonVueStore.dispatch("common/env/init")
    })
};
