const DysonLoader = () => {
    console.log("DysonLoader is loading...")
    return Promise.all([{% for path in script_paths %}import("{{ path | escapejs }}"),{% endfor %}]).then(() => {
        console.log("DysonLoader is initializing...")
        return window.dysonVueStore.dispatch("common/env/init")
    })
};
const DYSON_PROTOCOL = {
   "API_COSMOS": "{{ API_COSMOS | escapejs }}", 
    "WS_TENDERMINT": "{{ WS_TENDERMINT | escapejs }}",
    "API_TENDERMINT": "{{ API_TENDERMINT | escapejs }}",
    "CLEAR_DOMAIN": "{{ CLEAR_DOMAIN | escapejs }}",
    "DYS_DOMAIN": "{{ DYS_DOMAIN | escapejs }}",
    "SCRIPT_ADDRESS": "{{ SCRIPT_ADDRESS | escapejs }}"
}
