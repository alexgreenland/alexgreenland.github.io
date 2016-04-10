'use strict';

// $.map($('table.stations tr th'), function(element) { return $(element).text() })

var json = require('jsonfile');

var stations = json.readFileSync('stations.json');
var lines = json.readFileSync('lines.json');

var links = [];

var Link = function(line, source, target, branch) {
    this.lineName = line;
    this.line = lines.indexOf(line);
    
    this.sourceName = source;
    this.source = stations.indexOf(source);

    this.targetName = target;
    this.target = stations.indexOf(target);
    
    this.branchName = branch;
};

var generateBranch = function(line, branch, stations) {
    var source = stations[0];
    stations.slice(1).forEach(function(target) {
        links.push(new Link(line, source, target, branch));
        source = target;
    });
};

var generateNorthernLine = function() {
    
    generateBranch('Northern', 'Main', [
        'Morden',
        'South Wimbledon',
        'Colliers Wood',
        'Tooting Broadway',
        'Tooting Bec',
        'Balham',
        'Clapham South',
        'Clapham Common',
        'Clapham North',
        'Stockwell',
        'Oval',
        'Kennington'
    ]);    
    
    generateBranch('Northern', 'Charing Cross', [
        'Kennington',
        'Waterloo',
        'Embankment',
        'Charing Cross',
        'Leicester Square',
        'Tottenham Court Road',
        'Goodge Street',
        'Warren Street',
        'Euston',
        'Mornington Crescent',
        'Camden Town'
    ]);
    
    generateBranch('Northern', 'Bank', [
        'Kennington',
        'Elephant & Castle',
        'Borough',
        'London Bridge',
        'Bank',
        'Moorgate',
        'Old Street',
        'Angel',
        'King\'s Cross St. Pancras',
        'Euston',
        'Camden Town'
    ]);
    
    generateBranch('Northern', 'Edgware', [
        'Camden Town',
        'Chalk Farm',
        'Belsize Park',
        'Hampstead',
        'Golders Green',
        'Brent Cross',
        'Hendon Central',
        'Colindale',
        'Burnt Oak',
        'Edgware'
    ]);
    
    generateBranch('Northern', 'High Barnet', [
        'Camden Town',
        'Kentish Town',
        'Tufnell Park',
        'Archway',
        'Highgate',
        'East Finchley',
        'Finchley Central',
        'West Finchley',
        'Woodside Park',
        'Totteridge & Whetstone',
        'High Barnet'
    ]);
    
    generateBranch('Northern', 'Mill Hill', [
        'Finchley Central',
        'Mill Hill East'
    ]);
};

var generateWaterlooAndCityLine = function() {
    
    generateBranch('Waterloo & City', 'Main', [
        'Waterloo',
        'Bank'
    ]);
    
};

var generateCentralLine = function() {
    generateBranch('Central', 'Ruislip', [
        'North Acton',
        'Hanger Lane',
        'Perivale',
        'Greenford',
        'Northolt',
        'South Ruislip',
        'Ruislip Gardens',
        'West Ruislip'
    ]);
    
    generateBranch('Central', 'Ealing', [
        'North Acton',
        'West Acton',
        'Ealing Broadway'
    ]);
    
    generateBranch('Central', 'Main', [
        'North Acton',
        'East Acton',
        'White City',
        'Shepherd\'s Bush',
        'Holland Park',
        'Notting Hill Gate',
        'Queensway',
        'Lancaster Gate',
        'Marble Arch',
        'Bond Street',
        'Oxford Circus',
        'Tottenham Court Road',
        'Holborn',
        'Chancery Lane',
        'St. Paul\'s',
        'Bank',
        'Liverpool Street',
        'Bethnal Green',
        'Mile End',
        'Stratford',
        'Leyton',
        'Leytonstone'
    ]);
    
    generateBranch('Central', 'Hainault Loop', [
        'Leytonstone',
        'Wanstead',
        'Redbridge',
        'Gants Hill',
        'Newbury Park',
        'Barkingside',
        'Fairlop',
        'Hainault',
        'Grange Hill',
        'Chigwell',
        'Roding Valley',
        'Woodford'
    ]);
    
    generateBranch('Central', 'Epping', [
        'Leytonstone',
        'Snaresbrook',
        'South Woodford',
        'Woodford',
        'Buckhurst Hill',
        'Loughton',
        'Debden',
        'Theydon Bois',
        'Epping'
    ]);
    
};

var generateBakerlooLine = function() {
    generateBranch('Bakerloo', 'Main', [
        'Elephant & Castle',
        'Waterloo',
        'Charing Cross',
        'Piccadilly Circus',
        'Oxford Circus',
        'Regent\'s Park',
        'Baker Street',
        'Marylebone',
        'Edgware Road',
        'Paddington',
        'Warwick Avenue',
        'Maida Vale',
        'Kilburn Park',
        'Queen\'s Park',
        'Kensal Green',
        'Willesden Junction',
        'Harlesden',
        'Stonebridge Park',
        'Wembley Central',
        'North Wembley',
        'South Kenton',
        'Kenton',
        'Harrow & Wealdstone'
    ]);
};

var generateJubileeLine = function() {
    generateBranch('Jubilee', 'Main', [
        'Stanmore',
        'Canons Park',
        'Queensbury',
        'Kingsbury',
        'Neasden',
        'Dollis Hill',
        'Willesden Green',
        'Kilburn',
        'West Hampstead',
        'Finchley Road',
        'Swiss Cottage',
        'St. John\'s Wood',
        'Baker Street',
        'Bond Street',
        'Green Park',
        'Westminster',
        'Waterloo',
        'Southwark',
        'London Bridge',
        'Bermondsey',
        'Canada Water',
        'Canary Wharf',
        'North Greenwich',
        'Canning Town',
        'West Ham',
        'Stratford'
    ]);
};

var generatePiccadillyLine = function() {
    generateBranch('Piccadilly', 'Main', [
        'Acton Town',
        'Turnham Green',
        'Hammersmith',
        'Barons Court',
        'Earl\'s Court',
        'Gloucester Road',
        'South Kensington',
        'Knightsbridge',
        'Hyde Park Corner',
        'Green Park',
        'Piccadilly Circus',
        'Leicester Square',
        'Covent Garden',
        'Holborn',
        'Russell Square',
        'King\'s Cross St. Pancras',
        'Caledonian Road',
        'Holloway Road',
        'Arsenal',
        'Finsbury Park',
        'Manor House',
        'Turnpike Lane',
        'Wood Green',
        'Bounds Green',
        'Arnos Grove',
        'Southgate',
        'Oakwood',
        'Cockfosters'
    ]);
    
    generateBranch('Piccadilly', 'Heathrow', [
        'Acton Town',
        'South Ealing',
        'Northfields',
        'Boston Manor',
        'Osterley',
        'Hounslow East',
        'Hounslow Central',
        'Hounslow West',
        'Hatton Cross',
        'Heathrow Terminal 4',
        'Heathrow Terminals 2 & 3',
        'Hatton Cross'
    ]);
    
    generateBranch('Piccadilly', 'Heathrow Terminal 5', [
        'Heathrow Terminals 2 & 3',
        'Heathrow Terminal 5'
    ]);
    
    generateBranch('Piccadilly', 'Uxbridge', [
        'Acton Town',
        'Ealing Common',
        'North Ealing',
        'Park Royal',
        'Alperton',
        'Sudbury Town',
        'Sudbury Hill',
        'South Harrow',
        'Rayners Lane',
        'Eastcote',
        'Ruislip Manor',
        'Ruislip',
        'Ickenham',
        'Hillingdon',
        'Uxbridge'
    ]);
};

var generateVictoriaLine = function() {
    generateBranch('Victoria', 'Main', [
        'Brixton',
        'Vauxhall',
        'Pimlico',
        'Victoria',
        'Green Park',
        'Oxford Circus',
        'Warren Street',
        'Euston',
        'King\'s Cross St. Pancras',
        'Highbury & Islington',
        'Finsbury Park',
        'Seven Sisters',
        'Tottenham Hale',
        'Blackhorse Road',
        'Walthamstow Central'
    ]);
};

var generateDistrictLine = function() {
    generateBranch('District', 'Richmond', [
        'Turnham Green',
        'Gunnersbury',
        'Kew Gardens',
        'Richmond'
    ]);
    
    generateBranch('District', 'Ealing Broadway', [
        'Turnham Green',
        'Chiswick Park',
        'Acton Town',
        'Ealing Common',
        'Ealing Broadway'
    ]);
    
    generateBranch('District', 'Wimbledon', [
        'Earl\'s Court',
        'West Brompton',
        'Fulham Broadway',
        'Parsons Green',
        'Putney Bridge',
        'East Putney',
        'Southfields',
        'Wimbledon Park',
        'Wimbledon'
    ]);
    
    generateBranch('District', 'Olympia', [
        'Earl\'s Court',
        'Kensington (Olympia)'
    ]);
    
    generateBranch('District', 'Edgware', [
        'Earl\'s Court',
        'High Street Kensington',
        'Notting Hill Gate',
        'Bayswater',
        'Paddington',
        'Edgware Road'
    ]);
    
    generateBranch('District', 'Main', [
        'Turnham Green',
        'Stamford Brook',
        'Ravenscourt Park',
        'Hammersmith',
        'Barons Court',
        'West Kensington',
        'Earl\'s Court',
        'Gloucester Road',
        'South Kensington',
        'Sloane Square',
        'Victoria',
        'St. James\'s Park',
        'Westminster',
        'Embankment',
        'Temple',
        'Blackfriars',
        'Mansion House',
        'Cannon Street',
        'Monument',
        'Tower Hill',
        'Aldgate East',
        'Whitechapel',
        'Stepney Green',
        'Mile End',
        'Bow Road',
        'Bromley-by-Bow',
        'West Ham',
        'Plaistow',
        'Upton Park',
        'East Ham',
        'Barking',
        'Upney',
        'Becontree',
        'Dagenham Heathway',
        'Dagenham East',
        'Elm Park',
        'Hornchurch',
        'Upminster Bridge',
        'Upminster'
    ])
};

var generateCircleLine = function() {
    generateBranch('Circle', 'Main', [
        'Hammersmith',
        'Goldhawk Road',
        'Shepherd\'s Bush Market',
        'Wood Lane',
        'Latimer Road',
        'Ladbroke Grove',
        'Westbourne Park',
        'Royal Oak',
        'Paddington',
        'Edgware Road',
        'Baker Street',
        'Great Portland Street',
        'Euston Square',
        'King\'s Cross St. Pancras',
        'Farringdon',
        'Barbican',
        'Moorgate',
        'Liverpool Street',
        'Aldgate',
        'Tower Hill',
        'Monument',
        'Cannon Street',
        'Mansion House',
        'Blackfriars',
        'Temple',
        'Embankment',
        'Westminster',
        'St. James\'s Park',
        'Victoria',
        'Sloane Square',
        'South Kensington',
        'Gloucester Road',
        'High Street Kensington',
        'Notting Hill Gate',
        'Bayswater',
        'Paddington',
        'Edgware Road'
    ]);
};


var generateLinks = function() {
    generateNorthernLine();
    generateWaterlooAndCityLine();
    generateCentralLine();
    generateBakerlooLine();
    generateJubileeLine();
    generatePiccadillyLine();
    generateVictoriaLine();
    generateDistrictLine();
    generateCircleLine();
};


generateLinks();

var Tube = function() {
    this.nodes = [];
    this.links = [];
};

var tube = new Tube();


stations.forEach(function(station) {
    tube.nodes.push({
        name: station,
        group: 1
    });
});

links.forEach(function(link) {
   tube.links.push(link);
});

json.writeFileSync('tube.json', tube, {
    spaces: 4
});
