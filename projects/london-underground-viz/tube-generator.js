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

var generateLinks = function() {
    generateNorthernLine();
    

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
