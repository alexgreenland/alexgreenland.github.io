(function() {
    'use strict';
    
    var width = window.innerWidth;
    var height = window.innerHeight;

    var color = d3.scale.category20();

    var force = d3.layout.force()
                .charge(-100)
                .linkDistance(20)
                .gravity(0.1)
                .size([width, height]);
                
    var doubleClick = function(d) {
        d3.select(this).classed('fixed', d.fixed = false);
    };
                
    var dragStart = function(d) {
        d3.select(this).classed('fixed', d.fixed = true);
    };
                
    var drag = force.drag()
                .on('dragstart', dragStart);
            
    var svg = d3.select('.visualisation-container')
                .append('svg')
                // .attr('width', width)
                // .attr('height', height)
                .attr('viewBox', '0 0 ' + width.toString() + ' ' + height.toString());
            
            
    d3.json('tube.json', function(err, graph) {
        if (err) {
            console.log(err);
        }
    
        force
            .nodes(graph.nodes)
            .links(graph.links)
            .start();
        
        var link = svg.selectAll('.link')
                    .data(graph.links)
                    .enter().append('line')
                    .attr('class', function(d) {
                        return 'link ' + d.lineName.toLowerCase().replace(/&/g, '').replace(/ +/g, '-');
                    }).style('stroke-width', function(d) {
                        return 5;
                    });
                
        var node = svg.selectAll('.node')
                    .data(graph.nodes)
                    .enter().append('circle')
                    .attr('class', 'node')
                    .attr('r', 5)
                    .on('dblclick', doubleClick)
                    .call(drag);
    
        node.append('title')
                    .text(function(d) {
                        return d.name;
                    });
                
        force.on('tick', function() {
            link.attr('x1', function(d) {
                return d.source.x + d.line;
            }).attr('y1', function(d) {
                return d.source.y + d.line;
            }).attr('x2', function(d) {
                return d.target.x + d.line;
            }).attr('y2', function(d) {
                return d.target.y + d.line
            });
        
            node.attr('cx', function(d) {
                return d.x;
            }).attr('cy', function(d) {
                return d.y;
            }) 
        });
    });
})();