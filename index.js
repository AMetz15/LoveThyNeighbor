var offset = 100;

$('.navbar li a').click(function(event) {
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -offset);
});


function setInfantContent(pantryId)
{
    var infantContent = '<hr><span style="padding-top:10px;">Regardless of the area you live in, please contact the pantry below for infant supplies.</span><br><br><strong>The North East Food Pantry</strong><br><br>Maple United Methodist Church<br>342 Capital Ave NE, Battle Creek, MI 49017<br><br>M: 9:00a - 11:45a<br>T: 9:00a - 11:45a<br>W: 9:00a - 11:45a<br>R: 9:00a - 11:45a<br>F: 9:00a - 11:45a<br>';

    document.getElementById("infantInfo" + pantryId).innerHTML = infantContent;
}
 
function initMap() {

    //Pantry Coordinates
    var LakeviewCoords = [{
        lat: 42.3185106,
        lng: -85.179491
    }, {
        lat: 42.3166066,
        lng: -85.180177
    }, {
        lat: 42.3155912,
        lng: -85.181207
    }, {
        lat: 42.3141949,
        lng: -85.181379
    }, {
        lat: 42.3125447,
        lng: -85.181894
    }, {
        lat: 42.3114022,
        lng: -85.182752
    }, {
        lat: 42.3103866,
        lng: -85.184297
    }, {
        lat: 42.3092441,
        lng: -85.185155
    }, {
        lat: 42.3086094,
        lng: -85.185670
    }, {
        lat: 42.3067051,
        lng: -85.185670
    }, {
        lat: 42.3053086,
        lng: -85.185155
    }, {
        lat: 42.3045469,
        lng: -85.184640
    }, {
        lat: 42.3037851,
        lng: -85.183782
    }, {
        lat: 42.3031503,
        lng: -85.183095
    }, {
        lat: 42.3020077,
        lng: -85.182752
    }, {
        lat: 42.2959132,
        lng: -85.179662
    }, {
        lat: 42.2950244,
        lng: -85.179491
    }, {
        lat: 42.2678456,
        lng: -85.179147
    }, {
        lat: 42.2383676,
        lng: -85.189962
    }, {
        lat: 42.2316314,
        lng: -85.195455
    }, {
        lat: 42.2312501,
        lng: -85.296907
    }, {
        lat: 42.2880403,
        lng: -85.297422
    }, {
        lat: 42.3521377,
        lng: -85.298280
    }, {
        lat: 42.3522646,
        lng: -85.285749
    }, {
        lat: 42.3512497,
        lng: -85.285062
    }, {
        lat: 42.3506154,
        lng: -85.283861
    }, {
        lat: 42.3503616,
        lng: -85.281114
    }, {
        lat: 42.3508691,
        lng: -85.279912
    }, {
        lat: 42.3508691,
        lng: -85.277509
    }, {
        lat: 42.3504885,
        lng: -85.276823
    }, {
        lat: 42.3494736,
        lng: -85.275621
    }, {
        lat: 42.3487124,
        lng: -85.270986
    }, {
        lat: 42.3487124,
        lng: -85.268239
    }, {
        lat: 42.3480780,
        lng: -85.266008
    }, {
        lat: 42.3463018,
        lng: -85.263090
    }, {
        lat: 42.3454137,
        lng: -85.261716
    }, {
        lat: 42.3452869,
        lng: -85.258626
    }, {
        lat: 42.3450331,
        lng: -85.255365
    }, {
        lat: 42.3450331,
        lng: -85.252275
    }, {
        lat: 42.3442718,
        lng: -85.249185
    }, {
        lat: 42.3432568,
        lng: -85.246095
    }, {
        lat: 42.3430031,
        lng: -85.243005
    }, {
        lat: 42.3412267,
        lng: -85.240945
    }, {
        lat: 42.3391966,
        lng: -85.236825
    }, {
        lat: 42.3375470,
        lng: -85.231847
    }, {
        lat: 42.3356436,
        lng: -85.221376
    }, {
        lat: 42.3350092,
        lng: -85.219316
    }, {
        lat: 42.3323443,
        lng: -85.216913
    }, {
        lat: 42.3291717,
        lng: -85.209875
    }, {
        lat: 42.3279026,
        lng: -85.206613
    }, {
        lat: 42.3243490,
        lng: -85.199232
    }, {
        lat: 42.3229529,
        lng: -85.194082
    }, {
        lat: 42.3228260,
        lng: -85.192022
    }, {
        lat: 42.3221914,
        lng: -85.188932
    }, {
        lat: 42.3230799,
        lng: -85.185842
    }, {
        lat: 42.3214299,
        lng: -85.182409
    }, {
        lat: 42.3200337,
        lng: -85.181035
    }, {
        lat: 42.3188914,
        lng: -85.180864
    }, {
        lat: 42.3185106,
        lng: -85.179491
    }];
    var FranklinCoords = [{
        lat: 42.2315997,
        lng: -85.195412
    }, {
        lat: 42.2379545,
        lng: -85.190134
    }, {
        lat: 42.2674328,
        lng: -85.178976
    }, {
        lat: 42.2955005,
        lng: -85.179662
    }, {
        lat: 42.3034995,
        lng: -85.183095
    }, {
        lat: 42.3046421,
        lng: -85.184812
    }, {
        lat: 42.3076890,
        lng: -85.185499
    }, {
        lat: 42.3085776,
        lng: -85.185670
    }, {
        lat: 42.3103549,
        lng: -85.184254
    }, {
        lat: 42.3125129,
        lng: -85.181894
    }, {
        lat: 42.3155594,
        lng: -85.181207
    }, {
        lat: 42.3165749,
        lng: -85.180177
    }, {
        lat: 42.3176538,
        lng: -85.179834
    }, {
        lat: 42.3184789,
        lng: -85.179491
    }, {
        lat: 42.3184789,
        lng: -85.176315
    }, {
        lat: 42.3181615,
        lng: -85.174512
    }, {
        lat: 42.3182885,
        lng: -85.172452
    }, {
        lat: 42.3193039,
        lng: -85.170221
    }, {
        lat: 42.3184789,
        lng: -85.168418
    }, {
        lat: 42.3182885,
        lng: -85.166273
    }, {
        lat: 42.3211443,
        lng: -85.163097
    }, {
        lat: 42.3214616,
        lng: -85.161380
    }, {
        lat: 42.3222866,
        lng: -85.160007
    }, {
        lat: 42.3221597,
        lng: -85.158805
    }, {
        lat: 42.3226674,
        lng: -85.157175
    }, {
        lat: 42.3240635,
        lng: -85.155286
    }, {
        lat: 42.3240635,
        lng: -85.153827
    }, {
        lat: 42.3245077,
        lng: -85.151939
    }, {
        lat: 42.3253961,
        lng: -85.151338
    }, {
        lat: 42.3273632,
        lng: -85.151939
    }, {
        lat: 42.3306628,
        lng: -85.152368
    }, {
        lat: 42.3321857,
        lng: -85.141038
    }, {
        lat: 42.3248884,
        lng: -85.140695
    }, {
        lat: 42.3233654,
        lng: -85.140867
    }, {
        lat: 42.3190500,
        lng: -85.144386
    }, {
        lat: 42.3180346,
        lng: -85.145330
    }, {
        lat: 42.3111166,
        lng: -85.145502
    }, {
        lat: 42.2853100,
        lng: -85.144987
    }, {
        lat: 42.2844686,
        lng: -85.148978
    }, {
        lat: 42.2837701,
        lng: -85.151166
    }, {
        lat: 42.2814523,
        lng: -85.155715
    }, {
        lat: 42.2727203,
        lng: -85.152325
    }, {
        lat: 42.2706879,
        lng: -85.150394
    }, {
        lat: 42.2699892,
        lng: -85.149793
    }, {
        lat: 42.2635741,
        lng: -85.149493
    }, {
        lat: 42.2317585,
        lng: -85.150008
    }, {
        lat: 42.2315997,
        lng: -85.195412
    }];

    var LTNCoords = [{
        lat: 42.2334744,
        lng: -85.061430
    }, {
        lat: 42.2317268,
        lng: -85.150008
    }, {
        lat: 42.2611762,
        lng: -85.148978
    }, {
        lat: 42.2699734,
        lng: -85.149750
    }, {
        lat: 42.2727044,
        lng: -85.152325
    }, {
        lat: 42.2814682,
        lng: -85.155673
    }, {
        lat: 42.2837542,
        lng: -85.151124
    }, {
        lat: 42.2852782,
        lng: -85.144944
    }, {
        lat: 42.3180346,
        lng: -85.145287
    }, {
        lat: 42.3233654,
        lng: -85.140824
    }, {
        lat: 42.3321857,
        lng: -85.140995
    }, {
        lat: 42.3328202,
        lng: -85.137476
    }, {
        lat: 42.3375787,
        lng: -85.136704
    }, {
        lat: 42.3483001,
        lng: -85.132584
    }, {
        lat: 42.3502031,
        lng: -85.130524
    }, {
        lat: 42.3600343,
        lng: -85.117478
    }, {
        lat: 42.3656152,
        lng: -85.098252
    }, {
        lat: 42.3659323,
        lng: -85.095677
    }, {
        lat: 42.3653616,
        lng: -85.093789
    }, {
        lat: 42.3645371,
        lng: -85.091300
    }, {
        lat: 42.3648542,
        lng: -85.088467
    }, {
        lat: 42.3670738,
        lng: -85.085892
    }, {
        lat: 42.3689128,
        lng: -85.082974
    }, {
        lat: 42.3701811,
        lng: -85.080399
    }, {
        lat: 42.3711957,
        lng: -85.079283
    }, {
        lat: 42.3739857,
        lng: -85.075335
    }, {
        lat: 42.3746198,
        lng: -85.073361
    }, {
        lat: 42.3762684,
        lng: -85.071301
    }, {
        lat: 42.3776633,
        lng: -85.068297
    }, {
        lat: 42.3803579,
        lng: -85.063147
    }, {
        lat: 42.3388794,
        lng: -85.063147
    }, {
        lat: 42.3256817,
        lng: -85.062804
    }, {
        lat: 42.2334744,
        lng: -85.061430
    }];

    var NorthEastCoords = [{
        lat: 42.4214290,
        lng: -85.064778
    }, {
        lat: 42.3803579,
        lng: -85.063061
    }, {
        lat: 42.3762684,
        lng: -85.071301
    }, {
        lat: 42.3746198,
        lng: -85.073361
    }, {
        lat: 42.3739857,
        lng: -85.075335
    }, {
        lat: 42.3701811,
        lng: -85.080399
    }, {
        lat: 42.3689128,
        lng: -85.082974
    }, {
        lat: 42.3670738,
        lng: -85.085892
    }, {
        lat: 42.3648542,
        lng: -85.088467
    }, {
        lat: 42.3645371,
        lng: -85.091300
    }, {
        lat: 42.3659323,
        lng: -85.095677
    }, {
        lat: 42.3656152,
        lng: -85.098252
    }, {
        lat: 42.3600343,
        lng: -85.117478
    }, {
        lat: 42.3483001,
        lng: -85.132584
    }, {
        lat: 42.3375787,
        lng: -85.136704
    }, {
        lat: 42.3328202,
        lng: -85.137476
    }, {
        lat: 42.3306628,
        lng: -85.152325
    }, {
        lat: 42.3253961,
        lng: -85.151295
    }, {
        lat: 42.3245077,
        lng: -85.151896
    }, {
        lat: 42.3240635,
        lng: -85.155243
    }, {
        lat: 42.3226674,
        lng: -85.157132
    }, {
        lat: 42.3221597,
        lng: -85.158762
    }, {
        lat: 42.3222866,
        lng: -85.159964
    }, {
        lat: 42.3214616,
        lng: -85.161337
    }, {
        lat: 42.3211443,
        lng: -85.163054
    }, {
        lat: 42.3182885,
        lng: -85.166230
    }, {
        lat: 42.3184789,
        lng: -85.168375
    }, {
        lat: 42.3193039,
        lng: -85.170178
    }, {
        lat: 42.3182885,
        lng: -85.172410
    }, {
        lat: 42.3181615,
        lng: -85.174469
    }, {
        lat: 42.3184789,
        lng: -85.176272
    }, {
        lat: 42.3184789,
        lng: -85.179448
    }, {
        lat: 42.3197481,
        lng: -85.179276
    }, {
        lat: 42.3211443,
        lng: -85.179276
    }, {
        lat: 42.3224770,
        lng: -85.180134
    }, {
        lat: 42.3281882,
        lng: -85.180563
    }, {
        lat: 42.3317415,
        lng: -85.180649
    }, {
        lat: 42.3340892,
        lng: -85.179877
    }, {
        lat: 42.3359291,
        lng: -85.180306
    }, {
        lat: 42.3383401,
        lng: -85.180649
    }, {
        lat: 42.3436057,
        lng: -85.180821
    }, {
        lat: 42.4206053,
        lng: -85.182108
    }, {
        lat: 42.4205419,
        lng: -85.179791
    }, {
        lat: 42.4205419,
        lng: -85.179791
    }, {
        lat: 42.4205419,
        lng: -85.179791
    }, {
        lat: 42.4214290,
        lng: -85.064778
    }];

    var UrbandaleCoords = [{
        lat: 42.4198133,
        lng: -85.300040
    }, {
        lat: 42.3521060,
        lng: -85.298237
    }, {
        lat: 42.3522329,
        lng: -85.285706
    }, {
        lat: 42.3512180,
        lng: -85.285019
    }, {
        lat: 42.3505837,
        lng: -85.283818
    }, {
        lat: 42.3503299,
        lng: -85.281071
    }, {
        lat: 42.3508374,
        lng: -85.279870
    }, {
        lat: 42.3508374,
        lng: -85.277466
    }, {
        lat: 42.3494419,
        lng: -85.275578
    }, {
        lat: 42.3486807,
        lng: -85.270943
    }, {
        lat: 42.3486807,
        lng: -85.268197
    }, {
        lat: 42.3480463,
        lng: -85.265965
    }, {
        lat: 42.3453820,
        lng: -85.261673
    }, {
        lat: 42.3450014,
        lng: -85.255322
    }, {
        lat: 42.3450014,
        lng: -85.255322
    }, {
        lat: 42.3450014,
        lng: -85.252232
    }, {
        lat: 42.3442401,
        lng: -85.249142
    }, {
        lat: 42.3432251,
        lng: -85.246052
    }, {
        lat: 42.3429713,
        lng: -85.242962
    }, {
        lat: 42.3411950,
        lng: -85.240902
    }, {
        lat: 42.3391649,
        lng: -85.236783
    }, {
        lat: 42.3375153,
        lng: -85.231804
    }, {
        lat: 42.3349774,
        lng: -85.219273
    }, {
        lat: 42.3323126,
        lng: -85.216870
    }, {
        lat: 42.329195,
        lng: -85.209639
    }, {
        lat: 42.41079,
        lng: -85.21142
    }, {
        lat: 42.41313,
        lng: -85.20962
    }, {
        lat: 42.41684,
        lng: -85.21172
    }, {
        lat: 42.42047,
        lng: -85.21157
    }, {
        lat: 42.4198133,
        lng: -85.300040
    }];


    var MtZionCoords = [{
        lat: 42.42047,
        lng: -85.21157
    }, {
        lat: 42.41684,
        lng: -85.21172
    }, {
        lat: 42.41313,
        lng: -85.20962
    }, {
        lat: 42.41079,
        lng: -85.21142
    }, {
        lat: 42.329195,
        lng: -85.209639
    }, {
        lat: 42.3278709,
        lng: -85.206570
    }, {
        lat: 42.3243173,
        lng: -85.199189
    }, {
        lat: 42.3229212,
        lng: -85.194039
    }, {
        lat: 42.3227943,
        lng: -85.191979
    }, {
        lat: 42.3221597,
        lng: -85.188889
    }, {
        lat: 42.3230481,
        lng: -85.185799
    }, {
        lat: 42.3213981,
        lng: -85.182366
    }, {
        lat: 42.3200020,
        lng: -85.180993
    }, {
        lat: 42.3188596,
        lng: -85.180821
    }, {
        lat: 42.3184789,
        lng: -85.179448
    }, {
        lat: 42.3211443,
        lng: -85.179276
    }, {
        lat: 42.3224770,
        lng: -85.180134
    }, {
        lat: 42.3317415,
        lng: -85.180649
    }, {
        lat: 42.3340892,
        lng: -85.179877
    }, {
        lat: 42.3359291,
        lng: -85.180306
    }, {
        lat: 42.4204469,
        lng: -85.182280
    }, {
        lat: 42.4204469,
        lng: -85.182280
    }, {
        lat: 42.42047,
        lng: -85.21157
    }];

    //Makes Polygons
    var LakeviewPoly = new google.maps.Polygon({
        paths: LakeviewCoords,
        strokeColor: '#34d293',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#34d293',
        fillOpacity: 0.1
    });
    var FranklinPoly = new google.maps.Polygon({
        paths: FranklinCoords,
        strokeColor: '#3ab0e2',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#3ab0e2',
        fillOpacity: 0.1
    });
    var LTNPoly = new google.maps.Polygon({
        paths: LTNCoords,
        strokeColor: '#e96656',
        strokeOpacity: 0.5,
        strokeWeight: 2,
        fillColor: '#e96656',
        fillOpacity: 0.1
    });
    var NorthEastPoly = new google.maps.Polygon({
        paths: NorthEastCoords,
        strokeColor: '#e7ac44',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#e7ac44',
        fillOpacity: 0.1
    });
    var UrbandalePoly = new google.maps.Polygon({
        paths: UrbandaleCoords,
        strokeColor: '#EC4863',
        strokeOpacity: 0.5,
        strokeWeight: 2,
        fillColor: '#EC4863',
        fillOpacity: 0.1
    });
    var MtZionPoly = new google.maps.Polygon({
        paths: MtZionCoords,
        strokeColor: '#8B4DDF',
        strokeOpacity: 0.5,
        strokeWeight: 2,
        fillColor: '#8B4DDF',
        fillOpacity: 0.1
    });

 debugger;
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 42.297564,
            lng: -85.218887
        },
        zoom: 10
    });


    LakeviewPoly.setMap(map);
    FranklinPoly.setMap(map);
    LTNPoly.setMap(map);
    NorthEastPoly.setMap(map);
    MtZionPoly.setMap(map);
    UrbandalePoly.setMap(map);


    //Sets up autocomplete search
    var input = /** @type {!HTMLInputElement} */ (
        document.getElementById('pac-input'));

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);

    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29)
    });

    //Creates autocomplete listener
    autocomplete.addListener('place_changed', function() {
        infowindow.close();
        marker.setVisible(false);
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            window.alert("Autocomplete's returned place contains no geometry");
            return;
        }
        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
            map.setZoom(13);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(13);
        }
        marker.setIcon( /** @type {google.maps.Icon} */ ({
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(35, 35)
        }));
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);


        //Calculates which poly the marker is in
        var posLatLng = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());

        var pantry = 0;
        if (google.maps.geometry.poly.containsLocation(posLatLng, LakeviewPoly)) {
           pantry = 1;//"The Lakeview Food Pantry";
        } else if (google.maps.geometry.poly.containsLocation(posLatLng, LTNPoly)) {
           pantry = 2;//"Love Thy Neighbor Ministries";
        } else if (google.maps.geometry.poly.containsLocation(posLatLng, NorthEastPoly)) {
           pantry = 3;//"The North East Food Pantry";
        } else if (google.maps.geometry.poly.containsLocation(posLatLng, UrbandalePoly)) {
           pantry = 4;//"The Urbandale Food Pantry";
        } else if (google.maps.geometry.poly.containsLocation(posLatLng, MtZionPoly)) {
           pantry = 5;//"The Mt. Zion Food Pantry";
        } else if (google.maps.geometry.poly.containsLocation(posLatLng, FranklinPoly)) {
           pantry = 6;//"The Franklin Food Pantry";
        }

        switch(pantry) {
            case 1:
                infowindow.setContent('<div style="Text-align:center">Your food pantry is:<br><br><strong>The Lakeview Food Pantry</strong><hr>Lakeview Baptist Church<br>7 S. 20th St, Battle Creek, MI 49015<br><br>M: 9:30a - 11:45a<br>W: 9:30a - 11:45a<br>F: 9:30a - 11:45a<hr><button onclick="setInfantContent(1)">Click here for information on infant supplies.</button><br><div id="infantInfo1"></div></div>');
                break;
            case 2:
                infowindow.setContent('<div style="Text-align:center">Your food pantry is:<br><br><strong>Love Thy Neighbor Ministries</strong><hr>Love Thy Neighbor Community Center<br>1391 E. Michigan Ave., Battle Creek MI49014<br><br>M: 3:00p - 6:00p<br>W: 9:00a - 12:00p<br>F: 9:00a - 12:00p<br><a href="http://BCLoveThyNeighbor.org">Website</a><hr><button onclick="setInfantContent(2)">Click here for information on infant supplies.</button><br><div id="infantInfo2"></div></div>');
                break;
            case 3:
                infowindow.setContent('<div style="Text-align:center">Your food pantry is:<br><br><strong>The North East Food Pantry</strong><hr>Maple United Methodist Church<br>342 Capital Ave NE, Battle Creek, MI 49017<br><br>M: 9:00a - 11:45a<br>T: 9:00a - 11:45a<br>W: 9:00a - 11:45a<br>R: 9:00a - 11:45a<br>F: 9:00a - 11:45a<hr><button onclick="setInfantContent(3)">Click here for information on infant supplies.</button><br><div id="infantInfo3"></div></div>');
                break;
            case 4:
                infowindow.setContent('<div style="Text-align:center">Your food pantry is:<br><br><strong>The Urbandale Food Pantry</strong><hr>Overflow Church<br>3515 W Michigan Ave, Battle Creek, MI 49037<br><br>M: 10:00a - 12:00p<br>T: 10:00a - 12:00p<br>R: 10:00a - 12:00p<hr><button onclick="setInfantContent(3)">Click here for information on infant supplies.</button><br><div id="infantInfo3"></div></div>');
                break;
            case 5:
                infowindow.setContent('<div style="Text-align:center">Your food pantry is:<br><br><strong>Parkway Manor Food Pantry</strong><hr>Parkway Manor Community Building<br>380 Truth Dr., Battle Creek, MI 49017<br><br>M: 9:45a - 11:45a<br>W: 9:45a - 11:45a<br>F: 9:45a - 11:45a<hr><button onclick="setInfantContent(4)">Click here for information on infant supplies.</button><br><div id="infantInfo4"></div></div>');
                break;
            case 6:
                infowindow.setContent('<div style="Text-align:center">Your food pantry is:<br><br><strong>The Franklin Food Pantry</strong><hr>First United Methodist Church<br>111 E. Michigan Ave., Battle Creek, Mi 49017<br><br>M: 1:00p - 3:00p<br>T: 1:00p - 3:00p<br>H: 1:00p - 3:00p<hr><button onclick="setInfantContent(5)">Click here for information on infant supplies.</button><br><div id="infantInfo5"></div></div>');
                break;
            default:
                infowindow.setContent('Your address is located outside of the Battle Creek Food Pantry coverage area, call 211 for assistance.');
                break;
        }

        //infowindow.setContent('Your food pantry is:<br><div><strong>' + pantry + '</strong><br>Click <a href="#">HERE</a> for more information.');
        infowindow.open(map, marker);
    });
}