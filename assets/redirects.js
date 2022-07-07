// Old KB Redirects
// Use this for any redirects within support.exclaimer
var oldRedirects = [
    {
        // Article you are redirecting from.
        "from": ["360028972211", "360052204252", "360029201051", "360028974471"],
        // Where you want the article to be sent too.
        "to": "4406732893457"
    },
    {
        "from": ["360018832998"],
        "to": "360018667217"
    }
];

// Do not change
for (var i = 0; i < oldRedirects.length; i++) {
    var j = oldRedirects[i];

    for (var k = 0; k < j['from'].length; k++) {
        if (window.location.href.indexOf(j['from'][k]) > -1) {
            window.location.href = 'https://support.exclaimer.com/hc/en-us/articles/' + j["to"]; 
        }
    }
}

// New KB Redirects
// Use this for any redirects to support.portal
var newRedirects = [
    {
        "from": ["360033728771"],
        "to": "360050180772"
    },
    {
        "from": ["360028964871"],
        "to": "4405851491101"
    },
    {
        "from": ["360022325911"],
        "to": "360019148918"
    },
    {
        "from": ["360028963451"],
        "to": "4778354885149"
    },
    {
        "from": ["360028651292"],
        "to": "360018799217"
    }
];

// Do not change
for (var i = 0; i < newRedirects.length; i++) {
    var j = newRedirects[i];

    for (var k = 0; k < j['from'].length; k++) {
        if (window.location.href.indexOf(j['from'][k]) > -1) {
            window.location.href = 'https://support.portal.exclaimer.com/hc/en-gb/articles/' + j["to"]; 
        }
    }
}