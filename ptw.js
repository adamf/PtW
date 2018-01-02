var test_mode = true;

var map = new Datamap({
    element: document.getElementById('container'),
    projection: 'mercator', // big world map
    // countries don't listed in dataset will be painted with this color
    fills: { defaultFill: '#EFEFEF' },
    responsive: true
});

d3.select(window).on('resize', function() {
    map.resize();
});

var iso2to3 = {"BD": "BGD", "BE": "BEL", "BF": "BFA", "BG": "BGR", "BA": "BIH", "BB": "BRB", "WF": "WLF", "BL": "BLM", "BM": "BMU", "BN": "BRN", "BO": "BOL", "BH": "BHR", "BI": "BDI", "BJ": "BEN", "BT": "BTN", "JM": "JAM", "BV": "BVT", "BW": "BWA", "WS": "WSM", "BQ": "BES", "BR": "BRA", "BS": "BHS", "JE": "JEY", "BY": "BLR", "BZ": "BLZ", "RU": "RUS", "RW": "RWA", "RS": "SRB", "TL": "TLS", "RE": "REU", "TM": "TKM", "TJ": "TJK", "RO": "ROU", "TK": "TKL", "GW": "GNB", "GU": "GUM", "GT": "GTM", "GS": "SGS", "GR": "GRC", "GQ": "GNQ", "GP": "GLP", "JP": "JPN", "GY": "GUY", "GG": "GGY", "GF": "GUF", "GE": "GEO", "GD": "GRD", "GB": "GBR", "GA": "GAB", "SV": "SLV", "GN": "GIN", "GM": "GMB", "GL": "GRL", "GI": "GIB", "GH": "GHA", "OM": "OMN", "TN": "TUN", "JO": "JOR", "HR": "HRV", "HT": "HTI", "HU": "HUN", "HK": "HKG", "HN": "HND", "HM": "HMD", "VE": "VEN", "PR": "PRI", "PS": "PSE", "PW": "PLW", "PT": "PRT", "SJ": "SJM", "PY": "PRY", "IQ": "IRQ", "PA": "PAN", "PF": "PYF", "PG": "PNG", "PE": "PER", "PK": "PAK", "PH": "PHL", "PN": "PCN", "PL": "POL", "PM": "SPM", "ZM": "ZMB", "EH": "ESH", "EE": "EST", "EG": "EGY", "ZA": "ZAF", "EC": "ECU", "IT": "ITA", "VN": "VNM", "SB": "SLB", "ET": "ETH", "SO": "SOM", "ZW": "ZWE", "SA": "SAU", "ES": "ESP", "ER": "ERI", "ME": "MNE", "MD": "MDA", "MG": "MDG", "MF": "MAF", "MA": "MAR", "MC": "MCO", "UZ": "UZB", "MM": "MMR", "ML": "MLI", "MO": "MAC", "MN": "MNG", "MH": "MHL", "MK": "MKD", "MU": "MUS", "MT": "MLT", "MW": "MWI", "MV": "MDV", "MQ": "MTQ", "MP": "MNP", "MS": "MSR", "MR": "MRT", "IM": "IMN", "UG": "UGA", "TZ": "TZA", "MY": "MYS", "MX": "MEX", "IL": "ISR", "FR": "FRA", "IO": "IOT", "SH": "SHN", "FI": "FIN", "FJ": "FJI", "FK": "FLK", "FM": "FSM", "FO": "FRO", "NI": "NIC", "NL": "NLD", "NO": "NOR", "NA": "NAM", "VU": "VUT", "NC": "NCL", "NE": "NER", "NF": "NFK", "NG": "NGA", "NZ": "NZL", "NP": "NPL", "NR": "NRU", "NU": "NIU", "CK": "COK", "XK": "XKX", "CI": "CIV", "CH": "CHE", "CO": "COL", "CN": "CHN", "CM": "CMR", "CL": "CHL", "CC": "CCK", "CA": "CAN", "CG": "COG", "CF": "CAF", "CD": "COD", "CZ": "CZE", "CY": "CYP", "CX": "CXR", "CR": "CRI", "CW": "CUW", "CV": "CPV", "CU": "CUB", "SZ": "SWZ", "SY": "SYR", "SX": "SXM", "KG": "KGZ", "KE": "KEN", "SS": "SSD", "SR": "SUR", "KI": "KIR", "KH": "KHM", "KN": "KNA", "KM": "COM", "ST": "STP", "SK": "SVK", "KR": "KOR", "SI": "SVN", "KP": "PRK", "KW": "KWT", "SN": "SEN", "SM": "SMR", "SL": "SLE", "SC": "SYC", "KZ": "KAZ", "KY": "CYM", "SG": "SGP", "SE": "SWE", "SD": "SDN", "DO": "DOM", "DM": "DMA", "DJ": "DJI", "DK": "DNK", "VG": "VGB", "DE": "DEU", "YE": "YEM", "DZ": "DZA", "US": "USA", "UY": "URY", "YT": "MYT", "UM": "UMI", "LB": "LBN", "LC": "LCA", "LA": "LAO", "TV": "TUV", "TW": "TWN", "TT": "TTO", "TR": "TUR", "LK": "LKA", "LI": "LIE", "LV": "LVA", "TO": "TON", "LT": "LTU", "LU": "LUX", "LR": "LBR", "LS": "LSO", "TH": "THA", "TF": "ATF", "TG": "TGO", "TD": "TCD", "TC": "TCA", "LY": "LBY", "VA": "VAT", "VC": "VCT", "AE": "ARE", "AD": "AND", "AG": "ATG", "AF": "AFG", "AI": "AIA", "VI": "VIR", "IS": "ISL", "IR": "IRN", "AM": "ARM", "AL": "ALB", "AO": "AGO", "AQ": "ATA", "AS": "ASM", "AR": "ARG", "AU": "AUS", "AT": "AUT", "AW": "ABW", "IN": "IND", "AX": "ALA", "AZ": "AZE", "IE": "IRL", "ID": "IDN", "UA": "UKR", "QA": "QAT", "MZ": "MOZ"};


// Prototypes
function Country(name) {
    this.name = name;
    this.url = "";
    this.games_played = 0;
    this.numberOfThings = 0;
    this.fillColor = "";
    this.best_win_game_data = "";
    this.best_win_opponent_rating = 0;
    this.worst_loss_game_data = "";
    this.worst_loss_opponent_rating = 0;
    this.highest_rating_played = 0;
    this.lowest_rating_played = 0;
    this.emoji_flag = "";
}


/// Globals
var this_player = "adamwfletcher";
var countries_by_iso = {};
countries_by_iso.max_games_played = 0;
var countries = [];
var game_cache = [];
var player_cache = {}


var archive_url = "https://api.chess.com/pub/player/" + this_player + "/games/archives";

// promise map to force sequential executio through an array of promises.
// https://gist.github.com/tokland/71c483c89903da417d7062af009da571
function promiseMap(xs, f) {
  const reducer = (ysAcc$, x) =>
    ysAcc$.then(ysAcc => f(x).then(y => ysAcc.push(y) && ysAcc));
  return xs.reduce(reducer, Promise.resolve([]));
}


// Cache management
function update_country_data(country, rating, result) {
    if(typeof countries_by_iso[country] === "undefined") {
        countries_by_iso[country] = new Country(country);
        countries.push(country);
    }
    countries_by_iso[country].games_played++;
    countries_by_iso[country].numberOfThings = countries_by_iso[country].games_played;
    if (countries_by_iso[country].games_played > countries_by_iso.max_games_played) {
        countries_by_iso.max_games_played = countries_by_iso[country].games_played;
    }
    if (countries_by_iso[country].highest_rating_played < rating) {
        countries_by_iso[country].highest_rating_played = rating;
    }
    if (countries_by_iso[country].lowest_rating_played > rating ||
        countries_by_iso[country].lowest_rating_played == 0) {
        countries_by_iso[country].lowest_rating_played = rating;
    }
}

function update_datamap() {
    var labels = {};
    for (var i = 0; i < map.worldTopo.objects.world.geometries.length; i++) {
        console.log(map.worldTopo.objects.world.geometries[i].id);
        labels[map.worldTopo.objects.world.geometries[i].id] = ' ';
    }
    console.log(countries_by_iso.max_games_played);
    paletteScale = d3.scale.linear()
            .domain([0, countries_by_iso.max_games_played])
            .range(["#EFEFFF","#AE38EE"]); // blue color

    for (var i = 0; i < countries.length; i++) {

        var value = countries_by_iso[countries[i]].numberOfThings;
//        console.log(value  + " is color " + paletteScale(value));
        labels[countries[i]] = value;
        countries_by_iso[countries[i]].fillColor =  paletteScale(value);
    } 
    console.log(labels);
    map.labels({'customLabelText': labels});
    map.updateChoropleth(countries_by_iso);

}



function update_game_cache(game) {
    game_cache.push(game);
}


function get_game_cache_length() {
    return game_cache.length;
}

function update_player_cache(username, player) {
    console.log("adding " + username + " to cache");
    player_cache[username.toLowerCase()] = player;
}
function check_if_player_in_cache(username) {
    if (username.toLowerCase() in player_cache) {
        return true;
    }
    return false;
}

function get_player_from_cache(username) {
    return player_cache[username.toLowerCase()];
}

// stats functions

function calculate_stats() {
/*
{"avatar":"https://images.chesscomfiles.com/uploads/v1/user/23283948.3d332e6e.200x200o.fd614651ff46.png",
"player_id":23283948,
"@id":"https://api.chess.com/pub/player/adamwfletcher",
"name":"adam fletcher","username":"adamwfletcher",
"followers":9,
"country":"https://api.chess.com/pub/country/US",
"last_online":1514302552,
"joined":1437182073,
"status":"premium"}
*/
    // for every game
    // find the player
    for (var i = 0; i < game_cache.length; i++) {
        game = game_cache[i];
        opp_username = game.ptw_opponent.username;
        //console.log("opponent: " + opp_username);
        player_data = get_player_from_cache(opp_username);
        result = game.ptw_me.result;
        //console.log("player data for " + opp_username + ": "+ player_data);
        country = country_url_to_iso(player_data.country);
        rating = game.ptw_opponent.rating;
        time_class = game.time_class;
        update_country_data(country, rating, result);
    }
    console.log(countries);
    update_datamap();
}


// Game helpers

function country_url_to_iso(country_url) {
    pieces = country_url.split('/');
    iso2 = pieces[pieces.length - 1];
    return iso2to3[iso2];
}


function parse_game_data(game) {
/*
{"url":"https://www.chess.com/live/game/1222068676",
  "pgn":"<pgn string>",
  "time_class":"blitz",
  "rules":"chess",
  "white":{"rating":1594,"result":"win","@id":"https://api.chess.com/pub/player/adamwfletcher","username":"adamwfletcher"},
  "black":{"rating":1486,"result":"timeout","@id":"https://api.chess.com/pub/player/tiger1971","username":"Tiger1971"}}
*/
 result = "";
 if (game.white.username === this_player) {
//    console.log("i was white in game ", game.url);
    game.ptw_opponent = game.black;
    game.ptw_me = game.white;
 } else {
 //   console.log("i was black in game ", game.url);
    game.ptw_opponent = game.white;
    game.ptw_me = game.black;
 }
 return game;
}

function get_all_players() {
    players_to_load = [];
    pc = [];
    for (var i = 0; i < get_game_cache_length(); i++) {
        username = game_cache[i].ptw_opponent.username;
        user_url = game_cache[i].ptw_opponent["@id"];
        if (typeof pc[username] === "undefined") {
            players_to_load.push(user_url);
            pc[username] = 1;
        }
    }
    if (test_mode) {
        player_cache = test_player_cache;
        players_to_load = [];
    }
    players_to_load.push("last");
    console.log("Going to load " + players_to_load.length + " players");
    promiseMap(players_to_load, get_player_data);
}
// data retrieval promises 

function get_player_data(user_url) {
    if (user_url === "last") {
        console.log("got last");
        calculate_stats();
        return Promise.resolve("");
    }
    return fetch(user_url)
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
        console.log("got data for " + data.username);
        update_player_cache(data.username, data);
    });
}

function parse_archive_month(game_month_url) {
    console.log(game_month_url);
    if (game_month_url === "last") {
        console.log("got last");
        get_all_players();
        return Promise.resolve("");
    }

    return fetch(game_month_url)
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
        for (var i = 0, len = data.games.length; i < len; i++) {
            game = parse_game_data(data.games[i]);
            update_game_cache(game);
        }
        console.log("game cache size: " + get_game_cache_length());
    })
}

fetch(archive_url)
  .then((resp) => resp.json())
  .then(function(data) {
        games_to_load = [];
        console.log("archives:");
        for (var i = 0, len = data.archives.length; i < len ; i++) {
            console.log(data.archives[i]);
            games_to_load.push(data.archives[i]);
        }
        console.log("From the archive, I got: " + games_to_load.length + " months of games to load");
        console.log(games_to_load);
        if (test_mode) {
            game_cache = test_game_cache;
            games_to_load = [];
        }
        games_to_load.push("last");
        promiseMap(games_to_load, parse_archive_month);
   })
  .catch(function(error) {
    // If there is any error you will catch them here
  })
