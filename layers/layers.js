var wms_layers = [];

var lyr_Oahu_Hawaiian_Islands_1906_wgs84_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Oahu_Hawaiian_Islands_1906_wgs84",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Oahu_Hawaiian_Islands_1906_wgs84_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-17625564.007226, 2415348.453811, -17543215.485087, 2484214.418228]
                            })
                        });
var format_Testfleuves_1 = new ol.format.GeoJSON();
var features_Testfleuves_1 = format_Testfleuves_1.readFeatures(json_Testfleuves_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Testfleuves_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Testfleuves_1.addFeatures(features_Testfleuves_1);
var lyr_Testfleuves_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Testfleuves_1, 
                style: style_Testfleuves_1,
                popuplayertitle: "Testfleuves",
                interactive: true,
                title: '<img src="styles/legend/Testfleuves_1.png" /> Testfleuves'
            });
var format_TESTPolygone_2 = new ol.format.GeoJSON();
var features_TESTPolygone_2 = format_TESTPolygone_2.readFeatures(json_TESTPolygone_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TESTPolygone_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TESTPolygone_2.addFeatures(features_TESTPolygone_2);
var lyr_TESTPolygone_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TESTPolygone_2, 
                style: style_TESTPolygone_2,
                popuplayertitle: "TESTPolygone",
                interactive: true,
    title: 'TESTPolygone<br />\
    <img src="styles/legend/TESTPolygone_2_0.png" /> federal reserve<br />\
    <img src="styles/legend/TESTPolygone_2_1.png" /> None<br />\
    <img src="styles/legend/TESTPolygone_2_2.png" /> public lands<br />\
    <img src="styles/legend/TESTPolygone_2_3.png" /> <br />'
        });
var format_TESTBtiment_oahu_3 = new ol.format.GeoJSON();
var features_TESTBtiment_oahu_3 = format_TESTBtiment_oahu_3.readFeatures(json_TESTBtiment_oahu_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TESTBtiment_oahu_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TESTBtiment_oahu_3.addFeatures(features_TESTBtiment_oahu_3);
var lyr_TESTBtiment_oahu_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TESTBtiment_oahu_3, 
                style: style_TESTBtiment_oahu_3,
                popuplayertitle: "TESTBâtiment_oahu",
                interactive: true,
    title: 'TESTBâtiment_oahu<br />\
    <img src="styles/legend/TESTBtiment_oahu_3_0.png" /> école<br />\
    <img src="styles/legend/TESTBtiment_oahu_3_1.png" /> poste<br />'
        });

lyr_Oahu_Hawaiian_Islands_1906_wgs84_0.setVisible(true);lyr_Testfleuves_1.setVisible(true);lyr_TESTPolygone_2.setVisible(true);lyr_TESTBtiment_oahu_3.setVisible(true);
var layersList = [lyr_Oahu_Hawaiian_Islands_1906_wgs84_0,lyr_Testfleuves_1,lyr_TESTPolygone_2,lyr_TESTBtiment_oahu_3];
lyr_Testfleuves_1.set('fieldAliases', {'fid': 'fid', 'nom': 'nom', });
lyr_TESTPolygone_2.set('fieldAliases', {'fid': 'fid', 'type1': 'type1', 'type2': 'type2', });
lyr_TESTBtiment_oahu_3.set('fieldAliases', {'fid': 'fid', 'type': 'type', });
lyr_Testfleuves_1.set('fieldImages', {'fid': 'TextEdit', 'nom': 'TextEdit', });
lyr_TESTPolygone_2.set('fieldImages', {'fid': 'TextEdit', 'type1': 'TextEdit', 'type2': 'TextEdit', });
lyr_TESTBtiment_oahu_3.set('fieldImages', {'fid': 'TextEdit', 'type': 'ValueMap', });
lyr_Testfleuves_1.set('fieldLabels', {'fid': 'no label', 'nom': 'no label', });
lyr_TESTPolygone_2.set('fieldLabels', {'fid': 'inline label - always visible', 'type1': 'inline label - always visible', 'type2': 'no label', });
lyr_TESTBtiment_oahu_3.set('fieldLabels', {'fid': 'header label - always visible', 'type': 'header label - always visible', });
lyr_TESTBtiment_oahu_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});