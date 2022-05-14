"""
Example script
"""
from dys import SCRIPT_ADDRESS, CALLER, rpc, AMOUNT
from html import escape


def loop(n: int):
    while n >0:
        print(f'loop {n}')
        n -= 1

def store(data: str, name: str):
    result = rpc(
        "UpdateStorage",
        index=SCRIPT_ADDRESS + "/" + name,
        data=data,
        creator=SCRIPT_ADDRESS,
    )
    print("UpdateStorage", result)

    if result["error"] is not None:
        result = rpc(
            "CreateStorage",
            index=SCRIPT_ADDRESS + "/" + name,
            data=data,
            creator=SCRIPT_ADDRESS,
        )
        print("CreateStorage", result)


def my_function(i: int, index: int):
    """Example function that saves data to the chain"""
    1/i
    data = f"My_function got the number {i} and coins {AMOUNT} from {CALLER}"
    result = rpc(
        "UpdateStorage",
        index=SCRIPT_ADDRESS + "/some_data",
        data=data,
        creator=SCRIPT_ADDRESS,
    )
    print("UpdateStorage", result)

    if result["error"] is not None:
        result = rpc(
            "CreateStorage",
            index=SCRIPT_ADDRESS + "/some_data",
            data=data,
            creator=SCRIPT_ADDRESS,
        )
        print("result2", result)

    result = rpc(
        "Run",
        creator=SCRIPT_ADDRESS,
        address="dys19vka2zs9vksqtlecnvt5ydlyyvjnqj8ev892v9",
        functionName="foo",
        args=f'[{index}]',
        amount=[{"denom":"token", "amount":"1"}],
    )
    print("run foo", result)



    return f"Saved: {data}"


def app(environ, start_response):
    """
    Read-only wsgi app that can access chain data
    And make a pretty UI for users

    This example, however, is only text
    """

    try:
        headers = [("Content-type", "text/html; charset=utf-8")]
        start_response("200 OK", headers)
        # schema = rpc("DysQuerySchema", index=SCRIPT_ADDRESS)
        # source = rpc("DysQueryScript", index=SCRIPT_ADDRESS)

        # Read from the storage
        data = rpc("QueryStorage", index=SCRIPT_ADDRESS + "/some_data")
        data = str(data)

        balance = rpc("Balance", address=SCRIPT_ADDRESS, denom="token")
        return [
            f"""
<h1>Hello from {SCRIPT_ADDRESS} to {CALLER}</h1>
<pre>
I have {balance} dys
data:
{ escape(data) }
</pre>

<script>
"""
            """
function setChain(){
window.keplr.experimentalSuggestChain({
    chainId: "dys",
    chainName: "Dyson",
    rpc: "http://localhost:26657",
    rest: "http://localhost:1317",
    bip44: {
        coinType: 118,
    },
    bech32Config: {
        bech32PrefixAccAddr: "dys",
        bech32PrefixAccPub: "dys" + "pub",
        bech32PrefixValAddr: "dys" + "valoper",
        bech32PrefixValPub: "dys" + "valoperpub",
        bech32PrefixConsAddr: "dys" + "valcons",
        bech32PrefixConsPub: "dys" + "valconspub",
    },
    currencies: [
        {
            coinDenom: "DYS",
            coinMinimalDenom: "udys",
            coinDecimals: 6,
            coinGeckoId: "dys",

        },
    ],
    feeCurrencies: [
        {
            coinDenom: "DYS",
            coinMinimalDenom: "udys",
            coinDecimals: 6,
            coinGeckoId: "dys",
        },
    ],
    stakeCurrency: {
        coinDenom: "DYS",
        coinMinimalDenom: "udys",
        coinDecimals: 6,
        coinGeckoId: "dys",
    },
    coinType: 118,
    gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.03,
    },
    features: ["stargate"]
});
}
</script>
<button onclick="setChain()">Set chain</button>

"""
            f"""

DEBUG ENVIRON DATA
<pre>
{ ('''
'''.join([f"{ escape(str(k)) }: { escape(str(v)) }" for k,v in environ.items()])) }
</pre>
""".encode(),
        ]
    except Exception as e:
        return [f"{ escape(str(e)) } line: {e.lineno} column: {e.col}".encode()]
