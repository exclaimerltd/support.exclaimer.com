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
    {"from": ["360033728771"],"to": "360050180772"},
    {"from": ["360028964871"],"to": "4405851491101"},
    {"from": ["360022325911"],"to": "360019148918"},
    {"from": ["360028651292"],"to": "360018799217"},
    // New Redirects
    {"from": ["360043151912"],"to": "4405784771089"},
    {"from": ["360043930131"],"to": "4405787443729"},
    {"from": ["360043396832"],"to": "4405797683345"},
    {"from": ["360028963451"],"to": "4778354885149"},
    {"from": ["360019721072"],"to": "4405827152785"},
    {"from": ["360028963491"],"to": "360018751337"},
    {"from": ["360028963531"],"to": "5139020740381"},
    {"from": ["360028963571"],"to": "4405827624337"},
    {"from": ["360028963611"],"to": "4406058988945"},
    {"from": ["360028963691"],"to": "5139219826973"},
    {"from": ["360028646772"],"to": "5139258509725"},
    {"from": ["360028646792"],"to": "5139306292253"},
    {"from": ["360028963791"],"to": "5139506446749"},
    {"from": ["360028646852"],"to": "5139571381533"},
    {"from": ["4409934199441"],"to": "4405119535645"},
    {"from": ["360018457877"],"to": "5141799533725"},
    {"from": ["360017841497"],"to": "5149776419229"},
    {"from": ["360052559452"],"to": "5149858341405"},
    {"from": ["360051636112"],"to": "5151321717021"},

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