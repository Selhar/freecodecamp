(function(root,factory){if(typeof define==='function'&&define.amd){define(['d3-collection','d3-selection'],factory)}else if(typeof module==='object'&&module.exports){var d3Collection=require('d3-collection'),d3Selection=require('d3-selection')
module.exports=factory(d3Collection,d3Selection)}else{var d3=root.d3
root.d3.tip=factory(d3,d3)}}(this,function(d3Collection,d3Selection){return function(){var direction=d3TipDirection,offset=d3TipOffset,html=d3TipHTML,rootElement=document.body,node=initNode(),svg=null,point=null,target=null
function tip(vis){svg=getSVGNode(vis)
if(!svg)return
point=svg.createSVGPoint()
rootElement.appendChild(node)}
tip.show=function(){var args=Array.prototype.slice.call(arguments)
if(args[args.length-1]instanceof SVGElement)target=args.pop()
var content=html.apply(this,args),poffset=offset.apply(this,args),dir=direction.apply(this,args),nodel=getNodeEl(),i=directions.length,coords,scrollTop=document.documentElement.scrollTop||rootElement.scrollTop,scrollLeft=document.documentElement.scrollLeft||rootElement.scrollLeft
nodel.html(content).style('opacity',1).style('pointer-events','all')
while(i--)nodel.classed(directions[i],!1)
coords=directionCallbacks.get(dir).apply(this)
nodel.classed(dir,!0).style('top',(coords.top+poffset[0])+scrollTop+'px').style('left',(coords.left+poffset[1])+scrollLeft+'px')
return tip}
tip.hide=function(){var nodel=getNodeEl()
nodel.style('opacity',0).style('pointer-events','none')
return tip}
tip.attr=function(n,v){if(arguments.length<2&&typeof n==='string'){return getNodeEl().attr(n)}
var args=Array.prototype.slice.call(arguments)
d3Selection.selection.prototype.attr.apply(getNodeEl(),args)
return tip}
tip.style=function(n,v){if(arguments.length<2&&typeof n==='string'){return getNodeEl().style(n)}
var args=Array.prototype.slice.call(arguments)
d3Selection.selection.prototype.style.apply(getNodeEl(),args)
return tip}
tip.direction=function(v){if(!arguments.length)return direction
direction=v==null?v:functor(v)
return tip}
tip.offset=function(v){if(!arguments.length)return offset
offset=v==null?v:functor(v)
return tip}
tip.html=function(v){if(!arguments.length)return html
html=v==null?v:functor(v)
return tip}
tip.rootElement=function(v){if(!arguments.length)return rootElement
rootElement=v==null?v:functor(v)
return tip}
tip.destroy=function(){if(node){getNodeEl().remove()
node=null}
return tip}
function d3TipDirection(){return 'n'}
function d3TipOffset(){return[0,0]}
function d3TipHTML(){return ' '}
var directionCallbacks=d3Collection.map({n:directionNorth,s:directionSouth,e:directionEast,w:directionWest,nw:directionNorthWest,ne:directionNorthEast,sw:directionSouthWest,se:directionSouthEast}),directions=directionCallbacks.keys()
function directionNorth(){var bbox=getScreenBBox()
return{top:bbox.n.y-node.offsetHeight,left:bbox.n.x-node.offsetWidth/2}}
function directionSouth(){var bbox=getScreenBBox()
return{top:bbox.s.y,left:bbox.s.x-node.offsetWidth/2}}
function directionEast(){var bbox=getScreenBBox()
return{top:bbox.e.y-node.offsetHeight/2,left:bbox.e.x}}
function directionWest(){var bbox=getScreenBBox()
return{top:bbox.w.y-node.offsetHeight/2,left:bbox.w.x-node.offsetWidth}}
function directionNorthWest(){var bbox=getScreenBBox()
return{top:bbox.nw.y-node.offsetHeight,left:bbox.nw.x-node.offsetWidth}}
function directionNorthEast(){var bbox=getScreenBBox()
return{top:bbox.ne.y-node.offsetHeight,left:bbox.ne.x}}
function directionSouthWest(){var bbox=getScreenBBox()
return{top:bbox.sw.y,left:bbox.sw.x-node.offsetWidth}}
function directionSouthEast(){var bbox=getScreenBBox()
return{top:bbox.se.y,left:bbox.se.x}}
function initNode(){var div=d3Selection.select(document.createElement('div'))
div.style('position','absolute').style('top',0).style('opacity',0).style('pointer-events','none').style('box-sizing','border-box')
return div.node()}
function getSVGNode(element){var svgNode=element.node()
if(!svgNode)return null
if(svgNode.tagName.toLowerCase()==='svg')return svgNode
return svgNode.ownerSVGElement}
function getNodeEl(){if(node==null){node=initNode()
rootElement.appendChild(node)}
return d3Selection.select(node)}
function getScreenBBox(){var targetel=target||d3Selection.event.target
while(targetel.getScreenCTM==null&&targetel.parentNode==null){targetel=targetel.parentNode}
var bbox={},matrix=targetel.getScreenCTM(),tbbox=targetel.getBBox(),width=tbbox.width,height=tbbox.height,x=tbbox.x,y=tbbox.y
point.x=x
point.y=y
bbox.nw=point.matrixTransform(matrix)
point.x+=width
bbox.ne=point.matrixTransform(matrix)
point.y+=height
bbox.se=point.matrixTransform(matrix)
point.x-=width
bbox.sw=point.matrixTransform(matrix)
point.y-=height/2
bbox.w=point.matrixTransform(matrix)
point.x+=width
bbox.e=point.matrixTransform(matrix)
point.x-=width/2
point.y-=height/2
bbox.n=point.matrixTransform(matrix)
point.y+=height
bbox.s=point.matrixTransform(matrix)
return bbox}
function functor(v){return typeof v==='function'?v:function(){return v}}
return tip}}))