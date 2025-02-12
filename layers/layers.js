var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_LOTGABUNG_1 = new ol.format.GeoJSON();
var features_LOTGABUNG_1 = format_LOTGABUNG_1.readFeatures(json_LOTGABUNG_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOTGABUNG_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTGABUNG_1.addFeatures(features_LOTGABUNG_1);
var lyr_LOTGABUNG_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTGABUNG_1, 
                style: style_LOTGABUNG_1,
                popuplayertitle: 'LOT GABUNG',
                interactive: true,
                title: '<img src="styles/legend/LOTGABUNG_1.png" /> LOT GABUNG'
            });
var format_tandasempadan_2 = new ol.format.GeoJSON();
var features_tandasempadan_2 = format_tandasempadan_2.readFeatures(json_tandasempadan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tandasempadan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tandasempadan_2.addFeatures(features_tandasempadan_2);
var lyr_tandasempadan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tandasempadan_2, 
                style: style_tandasempadan_2,
                popuplayertitle: 'tanda sempadan',
                interactive: true,
                title: '<img src="styles/legend/tandasempadan_2.png" /> tanda sempadan'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_LOTGABUNG_1.setVisible(true);lyr_tandasempadan_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_LOTGABUNG_1,lyr_tandasempadan_2];
lyr_LOTGABUNG_1.set('fieldAliases', {'fid': 'fid', 'NO_LOT': 'NO_LOT', 'LUAS': 'LUAS', 'tsp — pemi': 'tsp — pemi', 'tsp — hakm': 'tsp — hakm', 'tsp — ha_1': 'tsp — ha_1', 'NO_LOT_1': 'NO_LOT_1', 'layer': 'layer', 'path': 'path', });
lyr_tandasempadan_2.set('fieldAliases', {'X': 'X', 'Y': 'Y', });
lyr_LOTGABUNG_1.set('fieldImages', {'fid': 'TextEdit', 'NO_LOT': 'TextEdit', 'LUAS': 'TextEdit', 'tsp — pemi': 'TextEdit', 'tsp — hakm': 'TextEdit', 'tsp — ha_1': 'TextEdit', 'NO_LOT_1': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_tandasempadan_2.set('fieldImages', {'X': '', 'Y': '', });
lyr_LOTGABUNG_1.set('fieldLabels', {'fid': 'no label', 'NO_LOT': 'header label - visible with data', 'LUAS': 'header label - visible with data', 'tsp — pemi': 'no label', 'tsp — hakm': 'no label', 'tsp — ha_1': 'no label', 'NO_LOT_1': 'no label', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_tandasempadan_2.set('fieldLabels', {'X': 'no label', 'Y': 'no label', });
lyr_tandasempadan_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});