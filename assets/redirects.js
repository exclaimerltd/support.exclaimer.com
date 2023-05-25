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
    {"from": ["360050223652"],"to": "360020256098"},
    {"from": ["360049672252"],"to": "360051052211"},
    {"from": ["360049585192"],"to": "360050971771"},
    {"from": ["360045589391"],"to": "5153666348701"},
    {"from": ["360044400691"],"to": "360020112377"},
    {"from": ["360043905432"],"to": "360019876838"},
    {"from": ["360042966551"],"to": "360050971771"},
    {"from": ["360042431672"],"to": "4404145809041"},
    {"from": ["360042860451"],"to": "360051052211"},
    {"from": ["360034597151"],"to": "5159946997789"},
    {"from": ["360028647932"],"to": "360018539857"},
    {"from": ["360028647912"],"to": "360018693078"},
    {"from": ["360028964811"],"to": "5161712740125"},
    {"from": ["360028964751"],"to": "360050971771"},
    {"from": ["360028964691"],"to": "360019244457"},
    {"from": ["360028647972"],"to": "5161970470941"},
    {"from": ["360028647752"],"to": "360020250198"},
    {"from": ["360028647732"],"to": "4404145731473"},
    {"from": ["360028647672"],"to": "360020858898"},
    {"from": ["360028647592"],"to": "360018799217"},
    {"from": ["360028647552"],"to": "5192802249757"},
    {"from": ["360028964391"],"to": "360050806171"},
    {"from": ["360028964351"],"to": "5193190939805"},
    // {"from": ["360028647252"],"to": "5532158639133"},
    // {"from": ["360028647192"],"to": "5195962420637"},
    {"from": ["360019806532"],"to": "5909818275869"},
    {"from": ["360019804492"],"to": "5909954557981"},
    {"from": ["360019957411"],"to": "5910329488797"},
    {"from": ["360043213032"],"to": "5910441298589"},
    {"from": ["360030866291"],"to": "5621758064541"},
    {"from": ["360028884912"],"to": "4404770484497"},
    {"from": ["360020033231"],"to": "4405745236381"},
    {"from": ["360020032811"],"to": "360018542017"},
    {"from": ["360019816472"],"to": "360019046337"},
    {"from": ["360019816392"],"to": "360019287177"},
    {"from": ["360020032391"],"to": "360019286797"},
    {"from": ["360019816212"],"to": "360019280197"},
    {"from": ["360019816172"],"to": "360019160098"},
    {"from": ["360020032171"],"to": "5870927672989"},
    {"from": ["360020032071"],"to": "5881673643677"},
    {"from": ["360020031751"],"to": "4406114131601"},
    {"from": ["360020031351"],"to": "360018542017"},
    {"from": ["360019814832"],"to": "5882134217245"},
    {"from": ["360020031011"],"to": "360018542017"},
    {"from": ["360020030911"],"to": "5882660908317"},
    {"from": ["360020030251"],"to": "5884744530845"},
    {"from": ["360019804632"],"to": "4406009182365"},
    {"from": ["360028650492"],"to": "360050806431"},
    {"from": ["360028967411"],"to": "5277166844701"},
    {"from": ["360028967331"],"to": "5199874232861"},
    {"from": ["360028967291"],"to": "5200361388701"},
    {"from": ["360028967231"],"to": "5201486667421"},
    {"from": ["360028967091"],"to": "5211329156637"},
    {"from": ["360028967071"],"to": "5211362800797"},
    {"from": ["360028966931"],"to": "5211700423197"},
    {"from": ["360028966451"],"to": "5923129971997"},
    {"from": ["360028649412"],"to": "5923428666141"},
    {"from": ["360028649732"],"to": "6906694170269"},
    {"from": ["360019594012"],"to": "360050338932"},
    {"from": ["360052864052"],"to": "5574911098141"},
    {"from": ["360049128972"],"to": "5459025538461"},
    {"from": ["360047564451"],"to": "5460497509149"},
    {"from": ["360040234411"],"to": "5461808329629"},
    {"from": ["360028655952"],"to": "6002759929245"},
    {"from": ["360030482152"],"to": "4778354885149"},
    {"from": ["360028655772"],"to": "5528670943261"},
    {"from": ["360028972931"],"to": "5528820240157"},
    {"from": ["360028964011"],"to": "6898709145885"},
    {"from": ["360055935292"],"to": "6017552722973"},
    {"from": ["360029657332"],"to": "6007675555357"},
    {"from": ["360056132171"],"to": "360019876838"},
    {"from": ["360020022071"],"to": "4404031036945"},
    {"from": ["360028646932"],"to": "6020370318365"},
    {"from": ["360028963871"],"to": "6020560949533"},
    {"from": ["360028646912"],"to": "6020594187549"},
    {"from": ["360028963851"],"to": "6017795772189"},
    {"from": ["360030480452"],"to": "6063589819421"},
    {"from": ["360028966711"],"to": "5337629720093"},
    {"from": ["360028966691"],"to": "5196124359325"},
    {"from": ["360028966791"],"to": "360050806171"},
    {"from": ["360029011831"],"to": "6872549002269"},
    {"from": ["360029011811"],"to": "5458324964253"},
    {"from": ["360029011771"],"to": "5458104027421"},
    {"from": ["360028651112"],"to": "360050806591"},
    {"from": ["360028651072"],"to": "360050806591"},
    {"from": ["360028968011"],"to": "5446937476509"},
    {"from": ["360028967971"],"to": "5447095394717"},
    {"from": ["360028968931"],"to": "360050339132"},
    {"from": ["360028968891"],"to": "6871209056029"},
    {"from": ["360028651952"],"to": "360050339132"},
    {"from": ["360028968771"],"to": "360050339132"},
    {"from": ["360028651852"],"to": "360050339132"},
    {"from": ["360028651932"],"to": "360050339132"},
    {"from": ["4421296831005"],"to": "5338190732445"},
    {"from": ["360047025472"],"to": "5339675231389"},
    {"from": ["360045079212"],"to": "6870801778845"},
    {"from": ["360028968151"],"to": "5351504980509"},
    {"from": ["360028968371"],"to": "5351798863261"},
    {"from": ["360028968311"],"to": "5351947660957"},
    {"from": ["360028968231"],"to": "5352040197917"},
    {"from": ["360028968191"],"to": "5301512407709"},
    {"from": ["360028968331"],"to": "360050345772"},
    {"from": ["360028968271"],"to": "360019934458"},
    {"from": ["360053590051"],"to": "6081699780893"},
    {"from": ["360028650992"],"to": "6084495364637"},
    {"from": ["360028650972"],"to": "6093900745885"},
    {"from": ["360028967891"],"to": "6095634024221"},
    {"from": ["360028967851"],"to": "6106332293917"},
    {"from": ["360028967831"],"to": "6110185612701"},
    {"from": ["360053590051"],"to": "6081699780893"},
    {"from": ["360028651752"],"to": "360018542017"},
    {"from": ["360028968691"],"to": "6139175378973"},
    {"from": ["360019089058"],"to": "6154171186717"},
    {"from": ["360029160551"],"to": "360050806211"},
    {"from": ["360028969531"],"to": "5473303190813"},
    {"from": ["360028969291"],"to": "6190399758493"},
    {"from": ["360025691771"],"to": "6641569235229"},
    {"from": ["360019811072"],"to": "360050339692"},
    {"from": ["360028969611"],"to": "360050806171"},
    {"from": ["360028652472"],"to": "360050806171"},
    {"from": ["360028969531"],"to": "5473303190813"},
    {"from": ["360028652332"],"to": "360050806651"},
    {"from": ["360028847332"],"to": "6884867282717"},
    {"from": ["4410034183313"],"to": "5447414794141"},
    {"from": ["360028652372"],"to": "360050339712"},
    {"from": ["4406744419217"],"to": "5447737312541"},
    {"from": ["360045339772"],"to": "5448814162589"},
    {"from": ["360036156251"],"to": "5450165814813"},
    {"from": ["360028657712"],"to": "5450473167389"},
    {"from": ["4408478932113"],"to": "6205516957213"},
    {"from": ["4406732893457"],"to": "6205657851421"},
    {"from": ["360057219371"],"to": "6469997673885"},
    {"from": ["360049123892"],"to": "6481112380445"},
    {"from": ["360047466091"],"to": "6481345794717"},
    {"from": ["360044329892"],"to": "6482770256541"},
    {"from": ["360030832552"],"to": "6482965284637"},
    {"from": ["360028972231"],"to": "6483426640029"},
    {"from": ["360028655012"],"to": "6485710952477"},
    {"from": ["360028971471"],"to": "6486568324765"},
    {"from": ["360028654692"],"to": "6486627218973"},
    {"from": ["360028971451"],"to": "6486686533149"},
    {"from": ["360028654552"],"to": "6537608251805"},
    {"from": ["360028654532"],"to": "6541638747293"},
    {"from": ["360028654432"],"to": "6547593131933"},
    {"from": ["360028653852"],"to": "6548080607261"},
    {"from": ["360028970451"],"to": "6588917368093"},
    {"from": ["360028972691"],"to": "4404775962641"},
    {"from": ["360053310211"],"to": "6589962041629"},
    {"from": ["360045973571"],"to": "6590065040029"},
    {"from": ["360035241491"],"to": "6590764675357"},
    {"from": ["360028657252"],"to": "6590963841437"},
    {"from": ["360028975071"],"to": "6591502463389"},
    {"from": ["360028974951"],"to": "6591531352221"},
    {"from": ["360028974891"],"to": "6619784774301"},
    {"from": ["360028974811"],"to": "6619951012893"},
    {"from": ["360028656672"],"to": "6620050050973"},
    {"from": ["360028974331"],"to": "6620216314781"},
    {"from": ["360028974251"],"to": "6620516454941"},
    {"from": ["360028656552"],"to": "6620733494813"},
    {"from": ["360028974111"],"to": "6621892700829"},
    {"from": ["360028974091"],"to": "6622042157085"},
    {"from": ["360028973991"],"to": "6622241414685"},
    {"from": ["360028973691"],"to": "6622373860765"},
    {"from": ["360028656272"],"to": "6625396397469"},
    {"from": ["360022528131"],"to": "6627910753437"},
    {"from": ["360054697691"],"to": "6628231228445"},
    {"from": ["360004357432"],"to": "6627910753437"},
    {"from": ["360028692512"],"to": "6636917919901"},
    {"from": ["360028692432"],"to": "6637161950621"},
    {"from": ["360029011631"],"to": "6637317671709"},
    {"from": ["360028692372"],"to": "6638296490525"},
    {"from": ["360026149092"],"to": "6638436856349"},
    {"from": ["4415484687121"],"to": "6681294586397"},
    {"from": ["4413608048145"],"to": "6756306669341"},
    {"from": ["4413588079121"],"to": "6756408474141"},
    {"from": ["4410558875153"],"to": "4412736516113"},
    {"from": ["4410079242001"],"to": "6758386942877"},
    {"from": ["4408533653393"],"to": "6758986549789"},
    {"from": ["4408485809041"],"to": "6759686027805"},
    {"from": ["4408181366673"],"to": "6759819776541"},
    {"from": ["4407527506961"],"to": "6760146881181"},
    {"from": ["4404017068177"],"to": "6763106946589"},
    {"from": ["4403603282449"],"to": "6772711490077"},
    {"from": ["360020761117"],"to": "6772926483869"},
    {"from": ["360020752037"],"to": "6773628660637"},
    {"from": ["360020218338"],"to": "6773973731485"},
    {"from": ["360019826198"],"to": "6774560348829"},
    {"from": ["360019648997"],"to": "6776545275677"},
    {"from": ["4403616114833"],"to": "6772410237213"},
    {"from": ["360018021198"],"to": "6777025992349"},
    {"from": ["360017881257"],"to": "6780499341981"},
    {"from": ["360017879037"],"to": "6781826845981"},
    {"from": ["360056610912"],"to": "6782348071965"},
    {"from": ["360045541132"],"to": "6791103268381"},
    {"from": ["360045920431"],"to": "6791453287325"},
    {"from": ["360044562651"],"to": "6792312949405"},
    {"from": ["360043065731"],"to": "6792459350173"},
    {"from": ["360034633312"],"to": "6792617950109"},
    {"from": ["360030892012"],"to": "6792782392349"},
    {"from": ["360029248252"],"to": "6792817410333"},
    {"from": ["360028692912"],"to": "6389214769565"},
    {"from": ["360028692832"],"to": "6793653039133"},
    {"from": ["360028692792"],"to": "6793827463837"},
    {"from": ["360028692772"],"to": "6794024581149"},
    {"from": ["360029011991"],"to": "6797075997725"},
    {"from": ["360028653912"],"to": "6811178734749"},
    {"from": ["360004462812"],"to": "6811332831133"},
    {"from": ["360044367151"],"to": "360019158558"},
    {"from": ["360019956831"],"to": "360019122837"},
    {"from": ["360028966851"],"to": "6813477740189"},
    {"from": ["360048523572"],"to": "360050338932"},
    {"from": ["360028650132"],"to": "6814090988573"},
    {"from": ["360028650112"],"to": "6814224050077"},
    {"from": ["360028966811"],"to": "6814303541149"},
    {"from": ["360018070317"],"to": "7206021223965"},
    {"from": ["360020495497"],"to": "6773728086941"},
    {"from": ["360028964391"],"to": "360050339152"},
    {"from": ["360055696672"],"to": "4404771999377"},
    {"from": ["360028647152"],"to": "360018539857"},
    {"from": ["360028647012"],"to": "360018693078"},
    {"from": ["360028963991"],"to": "360018693078"},
    {"from": ["360028964031"],"to": "360050643511"},
    {"from": ["360028969491"],"to": "4411526102417"},
    {"from": ["4413636801425"],"to": "4413063811985"},
    {"from": ["360028966631"],"to": "360050806211"},
    {"from": ["360028969671"],"to": "5288107925533"},
    {"from": ["360028652392"],"to": "360050338872"},
    {"from": ["360028652352"],"to": "360050806631"},
    {"from": ["360051497372"],"to": "4689285858205"},
    
    // Signature Design Redirects
    {"from": ["4403733328529"],"to": "4435347219869"},
    {"from": ["4403732590225"],"to": "4435403449757"},
    {"from": ["4403734882065"],"to": "4435406315549"},
    {"from": ["360040813912"],"to": "4406429590301"},
    {"from": ["360036142872"],"to": "4446228890653"},
    {"from": ["360034867372"],"to": "4451941407773"},
    {"from": ["360029340851"],"to": "4452099702173"},
    {"from": ["360028796652"],"to": "4452220450461"},
    {"from": ["360028541832"],"to": "4456042738461"},
    {"from": ["360028384012"],"to": "4457261618333"},
    {"from": ["360028649851"],"to": "4457408202397"},
    {"from": ["360027622211"],"to": "4458004178589"},
    {"from": ["360026485912"],"to": "4465048097821"},
    {"from": ["360026460611"],"to": "4465132324765"},
    {"from": ["360024594971"],"to": "4465187681437"},
    {"from": ["360024311812"],"to": "4468388350621"},
    {"from": ["360024122292"],"to": "4468666628765"},
    {"from": ["360024275171"],"to": "4497843081245"},
    {"from": ["360023360431"],"to": "4457488418461"},
    {"from": ["360023106792"],"to": "4498912869021"},
    {"from": ["360018938092"],"to": "4498917348381"},
    {"from": ["4404654564497"],"to": "4517997426077"},
    {"from": ["360018949118"],"to": "4526382712989"},
    {"from": ["360029663852"],"to": "4526469017757"},
    {"from": ["360029625572"],"to": "4643814235165"},
    {"from": ["360028382932"],"to": "7224982751773"},
    {"from": ["360026975692"],"to": "4527792081181"},
    {"from": ["360026770691"],"to": "4527851474589"},
    {"from": ["360026769431"],"to": "4527939644701"},
    {"from": ["360024001871"],"to": "4528165071133"},
    {"from": ["360022521031"],"to": "4551137332637"},
    {"from": ["360021953112"],"to": "4552168492957"},
    {"from": ["360021938992"],"to": "4584202477085"},
    {"from": ["360019922012"],"to": "360050806331"},
    {"from": ["360019921712"],"to": "4564014345629"},
    {"from": ["360019921612"],"to": "4576456329629"},
    {"from": ["360020159791"],"to": "4576634259229"},
    {"from": ["360019921292"],"to": "4577350311069"},
    {"from": ["360020159651"],"to": "4577606797853"},
    {"from": ["360019921212"],"to": "360050339272"},
    {"from": ["360019921112"],"to": "360050339272"},
    {"from": ["360020159211"],"to": "4577841842077"},
    {"from": ["360020121351"],"to": "4583726435357"},
    {"from": ["360020121011"],"to": "4584202477085"},
    {"from": ["360020119971"],"to": "4564014345629"},
    {"from": ["360020116971"],"to": "4585234517789"},
    {"from": ["360020115891"],"to": "4586961114269"},
    {"from": ["360020115711"],"to": "4587213492637"},
    {"from": ["360019890912"],"to": "360050806571"},
    {"from": ["360019889652"],"to": "360050806131"},
    {"from": ["360019888552"],"to": "360050339272"},
    {"from": ["360020112551"],"to": "360050806251"},
    {"from": ["360020112451"],"to": "360050806231"},
    {"from": ["360019816552"],"to": "360050805131"},
    {"from": ["360020032271"],"to": "360050339472"},
    {"from": ["360019815252"],"to": "360050806551"},
    {"from": ["360020031051"],"to": "360050339552"},
    {"from": ["360020030371"],"to": "360050339232"},
    {"from": ["360020028451"],"to": "360050806331"},
    {"from": ["360020027631"],"to": "4587972310813"},
    {"from": ["360019810592"],"to": "4588264477341"},
    {"from": ["360019810552"],"to": "4588222129181"},
    {"from": ["360020027411"],"to": "360050806511"},
    {"from": ["360020027351"],"to": "360050806471"},
    {"from": ["360019810272"],"to": "4577606797853"},
    {"from": ["360020026771"],"to": "4588498552605"},
    {"from": ["360019809872"],"to": "4595527368861"},
    {"from": ["360020026631"],"to": "4596155500061"},
    {"from": ["360019809632"],"to": "360052425951"},
    {"from": ["360019899731"],"to": "4596664117405"},
    {"from": ["360019842331"],"to": "360052425951"},
    {"from": ["360019751671"],"to": "4644543908253"},
    {"from": ["360018939292"],"to": "4404146481297"},
    {"from": ["360018936772"],"to": "4597215899549"},
    {"from": ["360018843211"],"to": "4585234517789"},
    {"from": ["360018842631"],"to": "4620074187677"},
    {"from": ["360018801151"],"to": "4622018885405"},
    {"from": ["360018739891"],"to": "4468666628765"},
    {"from": ["360018449572"],"to": "4622487714333"},
    {"from": ["360018586371"],"to": "4631569770397"},
    {"from": ["360019648997"],"to": "6776545275677"},
    {"from": ["360018828438"],"to": "360020605057"},
    {"from": ["360018667217"],"to": "360020741398"},
    {"from": ["360050971771"],"to": "4406429578269"},
    {"from": ["4403989000977"],"to": "4403988790289"},

    // FAQ Redirects
    {"from": ["360028651412"],"to": "360018542017#h_01G9CB7GTXCE1XJG1739JWSJKV"},
    {"from": ["360028651372"],"to": "360018542017#h_01G9D177M87KZV1R39XBYBSDYY"},
    {"from": ["360052843632"],"to": "360018542017#h_01GC91M16SZ6K3TC3N076HZARZ"},
    {"from": ["360028968491"],"to": "360018542017#h_01G9EWR33191KY8MVAZFHMBSHY"},
    {"from": ["4403735019153"],"to": "360018542017#h_01GCXH4FDFBVX79GNVMG0KHSSH"},
    {"from": ["360018555998"],"to": "360018542017#h_01GCXYPTCRJRANSSCZQKMQ5XGT"},
    {"from": ["360055683992"],"to": "360018542017#h_01F4F4NR2X6H6MTG5WKA1PMWPC"},
    {"from": ["360048668592"],"to": "360018542017#h_01GD06QACSE0X410XQKGV2T16E"},
    {"from": ["360044212192"],"to": "360018542017#h_01GD0949SFBVE2EA8EHXA03RX2"},
    {"from": ["360028963811"],"to": "360018542017#h_01GD0HQ4XM6FS0XQ40E3GP6Z48"},
    {"from": ["360019956531"],"to": "360018542017#h_01F4F4THZVKTYJ70D7WAWYTS78"},
    {"from": ["360019956131"],"to": "360018542017#h_01F4F4TYV33AKF27NEE75R7WJW"},
    {"from": ["360019735272"],"to": "360018542017#h_01F4F4VEXWM4NJHW85AWDQTKKX"},
    {"from": ["360054496512"],"to": "360018542017#h_01F4F4Q2H667Z2BTH57A5257SV"},
    {"from": ["360019957151"],"to": "360018542017#h_01F4F4SGVYVKDZE6P56E2SNRG1"},
    {"from": ["360019957091"],"to": "360018542017#h_01F4F4SZ3QKDQF3TQZWBK5CYX9"},
    {"from": ["360019736092"],"to": "360018542017#h_01F4F4QXHJ9YQVGRT8XCA26DMK"},
    {"from": ["360019956371"],"to": "360018542017#h_01F2S7YPPRMXS04GCYP7Y7HR8Q"},
    {"from": ["360019956371"],"to": "360018542017#h_01F2S7YPPRMXS04GCYP7Y7HR8Q"},
    {"from": ["360020026351"],"to": "360018542017#h_01F4F4QCS12MJVYH1S6E45GCYQ"},
    {"from": ["360028973031"],"to": "360018542017#h_01GD06QACSE0X410XQKGV2T16E"},
    {"from": ["360020031351"],"to": "360018542017#h_01G7RYCTX755JBD5HQPA7TZDSS"},
    {"from": ["360020031011"],"to": "360018542017#h_01G7S0JHY7WTMR7WBGKHFHTYNF"}
];

// Do not change
for (var i = 0; i < newRedirects.length; i++) {
    var j = newRedirects[i];

    for (var k = 0; k < j['from'].length; k++) {
        if (window.location.href.indexOf(j['from'][k]) > -1) {
            window.location.href = 'https://support.exclaimer.com/hc/en-gb/articles/' + j["to"]; 
        }
    }
}