(function(){
    var script = {
 "mouseWheelEnabled": true,
 "defaultVRPointer": "laser",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_B9963277_9408_0C36_41CA_3B48C00545A9",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_A5A8F3AD_9408_0CD5_41D1_81A13D72D5FD"
 ],
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 20,
 "buttonToggleMute": [
  "this.IconButton_6658C838_74AF_8B5A_418E_C797984D8CAE",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D"
 ],
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "verticalAlign": "top",
 "definitions": [{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_CC505962_C76C_6989_41D1_B3BF98D5D11C_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CC531F50_C76B_E989_41CC_C08A845C75A4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CC531F50_C76B_E989_41CC_C08A845C75A4_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CC58C2A5_C76C_F888_41DF_46B1E6A3B443",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CC58C2A5_C76C_F888_41DF_46B1E6A3B443_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CC505962_C76C_6989_41D1_B3BF98D5D11C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CC505962_C76C_6989_41D1_B3BF98D5D11C_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CC550FC9_C76C_2898_41E6_A443231A9930",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CC550FC9_C76C_2898_41E6_A443231A9930_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CC576610_C76C_3B88_4193_F68FB2AA6CB0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CC576610_C76C_3B88_4193_F68FB2AA6CB0_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_CC55C875_C76C_778B_41C5_19787223E6DD",
   "camera": "this.panorama_CC55C875_C76C_778B_41C5_19787223E6DD_camera"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CC505962_C76C_6989_41D1_B3BF98D5D11C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC505962_C76C_6989_41D1_B3BF98D5D11C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC505962_C76C_6989_41D1_B3BF98D5D11C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC505962_C76C_6989_41D1_B3BF98D5D11C_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CC505962_C76C_6989_41D1_B3BF98D5D11C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC505962_C76C_6989_41D1_B3BF98D5D11C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC505962_C76C_6989_41D1_B3BF98D5D11C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC505962_C76C_6989_41D1_B3BF98D5D11C_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CC505962_C76C_6989_41D1_B3BF98D5D11C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC505962_C76C_6989_41D1_B3BF98D5D11C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC505962_C76C_6989_41D1_B3BF98D5D11C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC505962_C76C_6989_41D1_B3BF98D5D11C_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CC505962_C76C_6989_41D1_B3BF98D5D11C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC505962_C76C_6989_41D1_B3BF98D5D11C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC505962_C76C_6989_41D1_B3BF98D5D11C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC505962_C76C_6989_41D1_B3BF98D5D11C_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CC505962_C76C_6989_41D1_B3BF98D5D11C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CC505962_C76C_6989_41D1_B3BF98D5D11C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC505962_C76C_6989_41D1_B3BF98D5D11C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC505962_C76C_6989_41D1_B3BF98D5D11C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC505962_C76C_6989_41D1_B3BF98D5D11C_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CC505962_C76C_6989_41D1_B3BF98D5D11C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC505962_C76C_6989_41D1_B3BF98D5D11C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC505962_C76C_6989_41D1_B3BF98D5D11C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC505962_C76C_6989_41D1_B3BF98D5D11C_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PANO_20201105_204309_6",
 "hfovMin": "135%",
 "id": "panorama_CC505962_C76C_6989_41D1_B3BF98D5D11C",
 "overlays": [
  "this.overlay_CCCDC312_D4D8_54FF_41DE_52D480000AEF",
  "this.overlay_CC925FDE_D4D8_6B67_41BE_CC75437CC076"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CC550FC9_C76C_2898_41E6_A443231A9930"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CC505962_C76C_6989_41D1_B3BF98D5D11C_t.jpg",
 "hfovMax": 135
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -94.59,
  "pitch": -2.76
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_EAD61684_E5E7_2BD4_41E7_1897C2E78FB7",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "displayOriginPosition": {
  "class": "RotationalCameraDisplayPosition",
  "hfov": 165,
  "yaw": 0,
  "stereographicFactor": 1,
  "pitch": -90
 },
 "id": "panorama_CC531F50_C76B_E989_41CC_C08A845C75A4_camera",
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000,
   "easing": "linear"
  },
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out",
   "targetHfov": 130,
   "duration": 3000,
   "targetPitch": 0
  }
 ],
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 162.55,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_EA32D860_E5E7_274D_41EC_B62616E71247",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 131.33,
  "pitch": 2.76
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_EA89570C_E5E7_2AD4_41EC_876A998F3694",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 153.37,
  "pitch": -12.86
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_EA6B5765_E5E7_2954_41E9_4B325BFA55C5",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PANO_20201105_205726_0",
 "hfovMin": "135%",
 "id": "panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C",
 "overlays": [
  "this.overlay_CCBFF1F8_D4DB_F72B_41E1_5F8953A0CE42",
  "this.overlay_CC843118_D4DB_D4EB_41DC_D6185D904950"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -99.18,
  "pitch": -1.84
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_EA4787E6_E5E7_2954_41D6_21A1A7B7D218",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PANO_20201105_205751_1",
 "hfovMin": "135%",
 "id": "panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B",
 "overlays": [
  "this.overlay_CB6C6330_D4D8_7B3B_41D7_BFCA6E232A07",
  "this.overlay_CCF4478C_D4D8_5BEA_41D5_08FC8ABA9180",
  "this.overlay_CC837826_D4DB_B527_41AB_A504A950E046"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CC550FC9_C76C_2898_41E6_A443231A9930"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CC55C875_C76C_778B_41C5_19787223E6DD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 61.53,
  "pitch": 1.84
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_EA57E812_E5E7_26CD_41E2_FF44C29CFFC7",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -86.33,
  "pitch": -0.92
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_EADA964D_E5E7_2B54_41E0_441FD2EA3779",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -132.24,
  "pitch": -5.51
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_EA75B7B9_E5E7_293C_41C9_89C2D4795789",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CC55C875_C76C_778B_41C5_19787223E6DD_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC55C875_C76C_778B_41C5_19787223E6DD_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC55C875_C76C_778B_41C5_19787223E6DD_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC55C875_C76C_778B_41C5_19787223E6DD_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CC55C875_C76C_778B_41C5_19787223E6DD_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC55C875_C76C_778B_41C5_19787223E6DD_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC55C875_C76C_778B_41C5_19787223E6DD_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC55C875_C76C_778B_41C5_19787223E6DD_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CC55C875_C76C_778B_41C5_19787223E6DD_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC55C875_C76C_778B_41C5_19787223E6DD_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC55C875_C76C_778B_41C5_19787223E6DD_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC55C875_C76C_778B_41C5_19787223E6DD_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CC55C875_C76C_778B_41C5_19787223E6DD_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC55C875_C76C_778B_41C5_19787223E6DD_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC55C875_C76C_778B_41C5_19787223E6DD_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC55C875_C76C_778B_41C5_19787223E6DD_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CC55C875_C76C_778B_41C5_19787223E6DD_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CC55C875_C76C_778B_41C5_19787223E6DD_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC55C875_C76C_778B_41C5_19787223E6DD_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC55C875_C76C_778B_41C5_19787223E6DD_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC55C875_C76C_778B_41C5_19787223E6DD_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CC55C875_C76C_778B_41C5_19787223E6DD_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC55C875_C76C_778B_41C5_19787223E6DD_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC55C875_C76C_778B_41C5_19787223E6DD_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC55C875_C76C_778B_41C5_19787223E6DD_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PANO_20201105_205817_2",
 "hfovMin": "135%",
 "id": "panorama_CC55C875_C76C_778B_41C5_19787223E6DD",
 "overlays": [
  "this.overlay_F709B0A2_D428_D5DF_41A4_B6ED37977B16",
  "this.overlay_F74F2073_D428_F53D_41E9_7F2F11E47F31"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CC55C875_C76C_778B_41C5_19787223E6DD_t.jpg",
 "hfovMax": 135
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 163.47,
  "pitch": -1.84
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_EA9A5738_E5E7_293C_41E0_036BF1395A5B",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 75.31,
  "pitch": 4.59
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_EA22383F_E5E7_2733_41C0_BAE738CCEFBC",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CC576610_C76C_3B88_4193_F68FB2AA6CB0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC576610_C76C_3B88_4193_F68FB2AA6CB0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC576610_C76C_3B88_4193_F68FB2AA6CB0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC576610_C76C_3B88_4193_F68FB2AA6CB0_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CC576610_C76C_3B88_4193_F68FB2AA6CB0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC576610_C76C_3B88_4193_F68FB2AA6CB0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC576610_C76C_3B88_4193_F68FB2AA6CB0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC576610_C76C_3B88_4193_F68FB2AA6CB0_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CC576610_C76C_3B88_4193_F68FB2AA6CB0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC576610_C76C_3B88_4193_F68FB2AA6CB0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC576610_C76C_3B88_4193_F68FB2AA6CB0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC576610_C76C_3B88_4193_F68FB2AA6CB0_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CC576610_C76C_3B88_4193_F68FB2AA6CB0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC576610_C76C_3B88_4193_F68FB2AA6CB0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC576610_C76C_3B88_4193_F68FB2AA6CB0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC576610_C76C_3B88_4193_F68FB2AA6CB0_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CC576610_C76C_3B88_4193_F68FB2AA6CB0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CC576610_C76C_3B88_4193_F68FB2AA6CB0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC576610_C76C_3B88_4193_F68FB2AA6CB0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC576610_C76C_3B88_4193_F68FB2AA6CB0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC576610_C76C_3B88_4193_F68FB2AA6CB0_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CC576610_C76C_3B88_4193_F68FB2AA6CB0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC576610_C76C_3B88_4193_F68FB2AA6CB0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC576610_C76C_3B88_4193_F68FB2AA6CB0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC576610_C76C_3B88_4193_F68FB2AA6CB0_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PANO_20201105_204652_8",
 "hfovMin": "135%",
 "id": "panorama_CC576610_C76C_3B88_4193_F68FB2AA6CB0",
 "overlays": [
  "this.overlay_CCCBF633_D4D9_DD3D_41E5_9444E1AEA578"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CC550FC9_C76C_2898_41E6_A443231A9930"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CC576610_C76C_3B88_4193_F68FB2AA6CB0_t.jpg",
 "hfovMax": 135
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_CC550FC9_C76C_2898_41E6_A443231A9930_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 159.8,
  "pitch": 0.92
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_EA03187D_E5E7_2737_41C1_1AB566F9BC16",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PANO_20201105_204026_4",
 "hfovMin": "135%",
 "id": "panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539",
 "overlays": [
  "this.overlay_CB48BFB4_D4D8_AB3B_41D4_96ACA71D19DA",
  "this.overlay_CCED9165_D4D8_D725_41A6_9FD34101D317"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CC58C2A5_C76C_F888_41DF_46B1E6A3B443"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaPlayer",
 "buttonToggleHotspots": [
  "this.IconButton_6658F838_74AF_8B5A_41C1_8DA59962CFF4",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96"
 ],
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": [
  "this.IconButton_6658D838_74AF_8B5A_41D7_154D466041BB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A"
 ],
 "buttonCardboardView": [
  "this.IconButton_66589837_74AF_8B56_41D7_A6F4FAC02CC3",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB"
 ],
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_rotation"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_CC576610_C76C_3B88_4193_F68FB2AA6CB0_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_CC55C875_C76C_778B_41C5_19787223E6DD_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CC531F50_C76B_E989_41CC_C08A845C75A4_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC531F50_C76B_E989_41CC_C08A845C75A4_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC531F50_C76B_E989_41CC_C08A845C75A4_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC531F50_C76B_E989_41CC_C08A845C75A4_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CC531F50_C76B_E989_41CC_C08A845C75A4_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC531F50_C76B_E989_41CC_C08A845C75A4_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC531F50_C76B_E989_41CC_C08A845C75A4_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC531F50_C76B_E989_41CC_C08A845C75A4_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CC531F50_C76B_E989_41CC_C08A845C75A4_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC531F50_C76B_E989_41CC_C08A845C75A4_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC531F50_C76B_E989_41CC_C08A845C75A4_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC531F50_C76B_E989_41CC_C08A845C75A4_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CC531F50_C76B_E989_41CC_C08A845C75A4_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC531F50_C76B_E989_41CC_C08A845C75A4_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC531F50_C76B_E989_41CC_C08A845C75A4_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC531F50_C76B_E989_41CC_C08A845C75A4_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CC531F50_C76B_E989_41CC_C08A845C75A4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CC531F50_C76B_E989_41CC_C08A845C75A4_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC531F50_C76B_E989_41CC_C08A845C75A4_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC531F50_C76B_E989_41CC_C08A845C75A4_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC531F50_C76B_E989_41CC_C08A845C75A4_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CC531F50_C76B_E989_41CC_C08A845C75A4_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC531F50_C76B_E989_41CC_C08A845C75A4_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC531F50_C76B_E989_41CC_C08A845C75A4_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC531F50_C76B_E989_41CC_C08A845C75A4_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PANO_20201105_210039_4",
 "hfovMin": "135%",
 "id": "panorama_CC531F50_C76B_E989_41CC_C08A845C75A4",
 "overlays": [
  "this.overlay_CC00F081_D4D8_D5DD_41D1_0FC281AE5941"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CC531F50_C76B_E989_41CC_C08A845C75A4_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_CC58C2A5_C76C_F888_41DF_46B1E6A3B443_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PANO_20201105_203928_3",
 "hfovMin": "135%",
 "id": "panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38",
 "overlays": [
  "this.overlay_CB4765B0_D4DB_BF3B_41E9_0A3E363FE585",
  "this.overlay_CC049CB2_D4D8_6D3F_41B7_C6627ABCD4FF"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38_t.jpg",
 "hfovMax": 130
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CC531F50_C76B_E989_41CC_C08A845C75A4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CC531F50_C76B_E989_41CC_C08A845C75A4_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CC58C2A5_C76C_F888_41DF_46B1E6A3B443",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CC58C2A5_C76C_F888_41DF_46B1E6A3B443_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CC505962_C76C_6989_41D1_B3BF98D5D11C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CC505962_C76C_6989_41D1_B3BF98D5D11C_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CC550FC9_C76C_2898_41E6_A443231A9930",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CC550FC9_C76C_2898_41E6_A443231A9930_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CC576610_C76C_3B88_4193_F68FB2AA6CB0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CC576610_C76C_3B88_4193_F68FB2AA6CB0_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_CC55C875_C76C_778B_41C5_19787223E6DD",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CC55C875_C76C_778B_41C5_19787223E6DD_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -113.88,
  "pitch": -2.76
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_EABEA6E0_E5E7_2B4C_41BC_6423A47310E6",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 157.96,
  "pitch": 2.76
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_EAAC16B2_E5E7_2BCC_41E5_5B411A75AE20",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 163.47,
  "pitch": -0.92
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_EA65378D_E5E7_29D4_41EB_19DD0BB5FB45",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CC550FC9_C76C_2898_41E6_A443231A9930_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC550FC9_C76C_2898_41E6_A443231A9930_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC550FC9_C76C_2898_41E6_A443231A9930_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC550FC9_C76C_2898_41E6_A443231A9930_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CC550FC9_C76C_2898_41E6_A443231A9930_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC550FC9_C76C_2898_41E6_A443231A9930_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC550FC9_C76C_2898_41E6_A443231A9930_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC550FC9_C76C_2898_41E6_A443231A9930_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CC550FC9_C76C_2898_41E6_A443231A9930_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC550FC9_C76C_2898_41E6_A443231A9930_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC550FC9_C76C_2898_41E6_A443231A9930_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC550FC9_C76C_2898_41E6_A443231A9930_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CC550FC9_C76C_2898_41E6_A443231A9930_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC550FC9_C76C_2898_41E6_A443231A9930_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC550FC9_C76C_2898_41E6_A443231A9930_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC550FC9_C76C_2898_41E6_A443231A9930_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CC550FC9_C76C_2898_41E6_A443231A9930_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CC550FC9_C76C_2898_41E6_A443231A9930_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC550FC9_C76C_2898_41E6_A443231A9930_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC550FC9_C76C_2898_41E6_A443231A9930_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC550FC9_C76C_2898_41E6_A443231A9930_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CC550FC9_C76C_2898_41E6_A443231A9930_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC550FC9_C76C_2898_41E6_A443231A9930_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC550FC9_C76C_2898_41E6_A443231A9930_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC550FC9_C76C_2898_41E6_A443231A9930_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PANO_20201105_204422_7",
 "hfovMin": "135%",
 "id": "panorama_CC550FC9_C76C_2898_41E6_A443231A9930",
 "overlays": [
  "this.overlay_CCC8FF03_D4D9_ACDD_41D6_110AA3246D28",
  "this.overlay_CC90EC22_D4D9_ACDF_41CF_CFE8AF0D2E7B",
  "this.overlay_CB76DA17_D4D9_D4E5_41E5_1C1470960BA2"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CC505962_C76C_6989_41D1_B3BF98D5D11C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CC576610_C76C_3B88_4193_F68FB2AA6CB0"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CC550FC9_C76C_2898_41E6_A443231A9930_t.jpg",
 "hfovMax": 135
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PANO_20201105_203733_0",
 "hfovMin": "135%",
 "id": "panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3",
 "overlays": [
  "this.overlay_CB1960C8_D4D8_D56B_41CE_1E26E5AD223D",
  "this.overlay_CBBD86DD_D4D8_BD65_41CC_314492182DC7"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CC55C875_C76C_778B_41C5_19787223E6DD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CC531F50_C76B_E989_41CC_C08A845C75A4"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CC58C2A5_C76C_F888_41DF_46B1E6A3B443_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC58C2A5_C76C_F888_41DF_46B1E6A3B443_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC58C2A5_C76C_F888_41DF_46B1E6A3B443_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC58C2A5_C76C_F888_41DF_46B1E6A3B443_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CC58C2A5_C76C_F888_41DF_46B1E6A3B443_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC58C2A5_C76C_F888_41DF_46B1E6A3B443_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC58C2A5_C76C_F888_41DF_46B1E6A3B443_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC58C2A5_C76C_F888_41DF_46B1E6A3B443_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CC58C2A5_C76C_F888_41DF_46B1E6A3B443_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC58C2A5_C76C_F888_41DF_46B1E6A3B443_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC58C2A5_C76C_F888_41DF_46B1E6A3B443_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC58C2A5_C76C_F888_41DF_46B1E6A3B443_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CC58C2A5_C76C_F888_41DF_46B1E6A3B443_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC58C2A5_C76C_F888_41DF_46B1E6A3B443_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC58C2A5_C76C_F888_41DF_46B1E6A3B443_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC58C2A5_C76C_F888_41DF_46B1E6A3B443_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CC58C2A5_C76C_F888_41DF_46B1E6A3B443_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CC58C2A5_C76C_F888_41DF_46B1E6A3B443_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC58C2A5_C76C_F888_41DF_46B1E6A3B443_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC58C2A5_C76C_F888_41DF_46B1E6A3B443_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC58C2A5_C76C_F888_41DF_46B1E6A3B443_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CC58C2A5_C76C_F888_41DF_46B1E6A3B443_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_CC58C2A5_C76C_F888_41DF_46B1E6A3B443_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_CC58C2A5_C76C_F888_41DF_46B1E6A3B443_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CC58C2A5_C76C_F888_41DF_46B1E6A3B443_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "PANO_20201105_204115_5",
 "hfovMin": "135%",
 "id": "panorama_CC58C2A5_C76C_F888_41DF_46B1E6A3B443",
 "overlays": [
  "this.overlay_CCBB1094_D4D8_D5FB_4170_19FC0E24AD81"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CC58C2A5_C76C_F888_41DF_46B1E6A3B443_t.jpg",
 "hfovMax": 135
},
{
 "minHeight": 50,
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minWidth": 100,
 "playbackBarProgressBorderColor": "#000000",
 "progressBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Georgia",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "progressLeft": 0,
 "propagateClick": true,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "paddingRight": 0,
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "height": "100%",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipBackgroundColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "class": "ViewerArea",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "paddingLeft": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "shadow": false,
 "toolTipOpacity": 0.5,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 7,
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 13,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
 "left": "0%",
 "width": 300,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
  "this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "0%",
 "layout": "absolute",
 "paddingRight": 0,
 "height": "100%",
 "shadow": false,
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--- LEFT PANEL 3"
 },
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "overflow": "scroll",
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "layout": "absolute",
 "height": 641,
 "paddingRight": 0,
 "shadow": false,
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-- SETTINGS"
 },
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_B9963277_9408_0C36_41CA_3B48C00545A9",
 "left": "0%",
 "children": [
  "this.Container_B996F276_9408_0C36_41E2_08CB6C07DEDA",
  "this.Container_B9961277_9408_0C36_41DA_ACC35EB11535"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "click": "this.setComponentVisibility(this.Container_B9963277_9408_0C36_41CA_3B48C00545A9, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "bottom": "0%",
 "layout": "absolute",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--INFO photo"
 },
 "gap": 10,
 "visible": false,
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "bottom": "0%",
 "layout": "absolute",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "gap": 10,
 "visible": false,
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "bottom": "0%",
 "layout": "absolute",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--LOCATION"
 },
 "gap": 10,
 "visible": false,
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "bottom": "0%",
 "layout": "absolute",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--FLOORPLAN"
 },
 "gap": 10,
 "visible": false,
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "bottom": "0%",
 "layout": "absolute",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PHOTOALBUM"
 },
 "gap": 10,
 "visible": false,
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_A5A8F3AD_9408_0CD5_41D1_81A13D72D5FD",
 "left": "0%",
 "children": [
  "this.Container_A5AA03AD_9408_0CD5_41E2_1543D1B93E75",
  "this.Container_A5A903AD_9408_0CD5_41D1_FB45B5BD272C"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "click": "this.setComponentVisibility(this.Container_A5A8F3AD_9408_0CD5_41D1_81A13D72D5FD, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "bottom": "0%",
 "layout": "absolute",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "--REALTOR"
 },
 "gap": 10,
 "visible": false,
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "id": "IconButton_6658C838_74AF_8B5A_418E_C797984D8CAE",
 "backgroundOpacity": 0,
 "width": 30,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "height": 30,
 "mode": "toggle",
 "paddingRight": 0,
 "shadow": false,
 "maxWidth": 60,
 "pressedIconURL": "skin/IconButton_6658C838_74AF_8B5A_418E_C797984D8CAE_pressed.png",
 "transparencyActive": true,
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "IconButton",
 "paddingTop": 0,
 "maxHeight": 60,
 "iconURL": "skin/IconButton_6658C838_74AF_8B5A_418E_C797984D8CAE.png",
 "data": {
  "name": "IconButton Sound"
 },
 "cursor": "hand",
 "minHeight": 1
},
{
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "width": 58,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "propagateClick": true,
 "height": 58,
 "mode": "toggle",
 "paddingRight": 0,
 "shadow": false,
 "maxWidth": 58,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "transparencyActive": true,
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "IconButton",
 "paddingTop": 0,
 "maxHeight": 58,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "data": {
  "name": "IconButton MUTE"
 },
 "cursor": "hand",
 "minHeight": 1
},
{
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "id": "IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57",
 "backgroundOpacity": 0,
 "width": 30,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "height": 30,
 "mode": "toggle",
 "paddingRight": 0,
 "shadow": false,
 "maxWidth": 60,
 "pressedIconURL": "skin/IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57_pressed.png",
 "transparencyActive": true,
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "IconButton",
 "paddingTop": 0,
 "maxHeight": 60,
 "iconURL": "skin/IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57.png",
 "data": {
  "name": "IconButton Fullscreen"
 },
 "cursor": "hand",
 "minHeight": 1
},
{
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "width": 58,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "propagateClick": true,
 "height": 58,
 "mode": "toggle",
 "paddingRight": 0,
 "shadow": false,
 "maxWidth": 58,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "transparencyActive": true,
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "IconButton",
 "paddingTop": 0,
 "maxHeight": 58,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "cursor": "hand",
 "minHeight": 1
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CC550FC9_C76C_2898_41E6_A443231A9930, this.camera_EAD61684_E5E7_2BD4_41E7_1897C2E78FB7); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -168.66,
   "hfov": 21.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CC505962_C76C_6989_41D1_B3BF98D5D11C_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -41.11
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_F33B1ED4_DC28_ED7B_41DD_FE018960108E",
   "pitch": -41.11,
   "yaw": -168.66,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.4,
   "distance": 100
  }
 ],
 "id": "overlay_CCCDC312_D4D8_54FF_41DE_52D480000AEF",
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B, this.camera_EADA964D_E5E7_2B54_41E0_441FD2EA3779); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -66.8,
   "hfov": 19.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CC505962_C76C_6989_41D1_B3BF98D5D11C_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -46.84
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_F33BEED4_DC28_ED7B_41C2_D7B2292D80AC",
   "pitch": -46.84,
   "yaw": -66.8,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.43,
   "distance": 100
  }
 ],
 "id": "overlay_CC925FDE_D4D8_6B67_41BE_CC75437CC076",
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B, this.camera_EA32D860_E5E7_274D_41EC_B62616E71247); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 165.97,
   "hfov": 21.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.3
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_F3357ECC_DC28_ED6B_41E8_1FB797BD3F14",
   "pitch": -40.3,
   "yaw": 165.97,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.66,
   "distance": 100
  }
 ],
 "id": "overlay_CCBFF1F8_D4DB_F72B_41E1_5F8953A0CE42",
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.89,
   "hfov": 23.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.75
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_F3353ECC_DC28_ED6B_41E8_E3961C023A97",
   "pitch": -33.75,
   "yaw": -7.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.62,
   "distance": 100
  }
 ],
 "id": "overlay_CC843118_D4DB_D4EB_41DC_D6185D904950",
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.11,
   "hfov": 23.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.8
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_F3345ECA_DC28_ED6F_41EA_CD8898883738",
   "pitch": -35.8,
   "yaw": 1.11,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.04,
   "distance": 100
  }
 ],
 "id": "overlay_CB6C6330_D4D8_7B3B_41D7_BFCA6E232A07",
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CC55C875_C76C_778B_41C5_19787223E6DD, this.camera_EA89570C_E5E7_2AD4_41EC_876A998F3694); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 163.11,
   "hfov": 24.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.48
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_F3342ECB_DC28_ED6D_41DB_470E2233665D",
   "pitch": -30.48,
   "yaw": 163.11,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 24.48,
   "distance": 100
  }
 ],
 "id": "overlay_CCF4478C_D4D8_5BEA_41D5_08FC8ABA9180",
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CC550FC9_C76C_2898_41E6_A443231A9930, this.camera_EABEA6E0_E5E7_2B4C_41BC_6423A47310E6); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 89.88,
   "hfov": 24.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.07
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_F3349ECB_DC28_ED6D_41C5_377AA461D1EC",
   "pitch": -30.07,
   "yaw": 89.88,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 24.58,
   "distance": 100
  }
 ],
 "id": "overlay_CC837826_D4DB_B527_41AB_A504A950E046",
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.25,
   "hfov": 21.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CC55C875_C76C_778B_41C5_19787223E6DD_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.3
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_F3391ED7_DC28_ED65_41D1_F5F01FA0A648",
   "pitch": -40.3,
   "yaw": -6.25,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.66,
   "distance": 100
  }
 ],
 "id": "overlay_F709B0A2_D428_D5DF_41A4_B6ED37977B16",
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3, this.camera_EA6B5765_E5E7_2954_41E9_4B325BFA55C5); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 131.61,
   "hfov": 22.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CC55C875_C76C_778B_41C5_19787223E6DD_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.66
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_F339DED7_DC28_ED65_41D2_69D0B8BE8767",
   "pitch": -38.66,
   "yaw": 131.61,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.18,
   "distance": 100
  }
 ],
 "id": "overlay_F74F2073_D428_F53D_41E9_7F2F11E47F31",
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CC550FC9_C76C_2898_41E6_A443231A9930, this.camera_EA57E812_E5E7_26CD_41E2_FF44C29CFFC7); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 42.02,
   "hfov": 21.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CC576610_C76C_3B88_4193_F68FB2AA6CB0_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -41.11
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_F3389ED6_DC28_ED67_41E2_0A5D0A5D2E2E",
   "pitch": -41.11,
   "yaw": 42.02,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.4,
   "distance": 100
  }
 ],
 "id": "overlay_CCCBF633_D4D9_DD3D_41E5_9444E1AEA578",
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38, this.camera_EA03187D_E5E7_2737_41C1_1AB566F9BC16); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 174.56,
   "hfov": 22.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.02
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_F33A2ED2_DC28_ED7F_41E0_9279890965DA",
   "pitch": -37.02,
   "yaw": 174.56,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.68,
   "distance": 100
  }
 ],
 "id": "overlay_CB48BFB4_D4D8_AB3B_41D4_96ACA71D19DA",
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.21,
   "hfov": 20.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -43.57
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_F33AFED3_DC28_ED7D_41E2_1755F75AA3EF",
   "pitch": -43.57,
   "yaw": -4.21,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.58,
   "distance": 100
  }
 ],
 "id": "overlay_CCED9165_D4D8_D725_41A6_9FD34101D317",
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "id": "IconButton_6658F838_74AF_8B5A_41C1_8DA59962CFF4",
 "backgroundOpacity": 0,
 "width": 30,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "height": 30,
 "mode": "toggle",
 "paddingRight": 0,
 "shadow": false,
 "maxWidth": 60,
 "pressedIconURL": "skin/IconButton_6658F838_74AF_8B5A_41C1_8DA59962CFF4_pressed.png",
 "transparencyActive": true,
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "IconButton",
 "paddingTop": 0,
 "maxHeight": 60,
 "iconURL": "skin/IconButton_6658F838_74AF_8B5A_41C1_8DA59962CFF4.png",
 "data": {
  "name": "IconButton Hs visibility"
 },
 "cursor": "hand",
 "minHeight": 1
},
{
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "width": 58,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "propagateClick": true,
 "height": 58,
 "mode": "toggle",
 "paddingRight": 0,
 "shadow": false,
 "maxWidth": 58,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "transparencyActive": true,
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "IconButton",
 "paddingTop": 0,
 "maxHeight": 58,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "data": {
  "name": "IconButton HS "
 },
 "cursor": "hand",
 "minHeight": 1
},
{
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "id": "IconButton_6658D838_74AF_8B5A_41D7_154D466041BB",
 "backgroundOpacity": 0,
 "width": 34,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "height": 34,
 "mode": "toggle",
 "paddingRight": 0,
 "shadow": false,
 "maxWidth": 60,
 "pressedIconURL": "skin/IconButton_6658D838_74AF_8B5A_41D7_154D466041BB_pressed.png",
 "transparencyActive": true,
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "IconButton",
 "paddingTop": 0,
 "maxHeight": 60,
 "iconURL": "skin/IconButton_6658D838_74AF_8B5A_41D7_154D466041BB.png",
 "data": {
  "name": "IconButton Gyroscopic"
 },
 "cursor": "hand",
 "minHeight": 1
},
{
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "width": 58,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "propagateClick": true,
 "height": 58,
 "mode": "toggle",
 "paddingRight": 0,
 "shadow": false,
 "maxWidth": 58,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "transparencyActive": true,
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "IconButton",
 "paddingTop": 0,
 "maxHeight": 58,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "data": {
  "name": "IconButton GYRO"
 },
 "cursor": "hand",
 "minHeight": 1
},
{
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "id": "IconButton_66589837_74AF_8B56_41D7_A6F4FAC02CC3",
 "backgroundOpacity": 0,
 "width": 30,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "height": 30,
 "mode": "push",
 "paddingRight": 0,
 "shadow": false,
 "maxWidth": 60,
 "transparencyActive": true,
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "IconButton",
 "paddingTop": 0,
 "maxHeight": 60,
 "iconURL": "skin/IconButton_66589837_74AF_8B56_41D7_A6F4FAC02CC3.png",
 "data": {
  "name": "IconButton VR"
 },
 "cursor": "hand",
 "minHeight": 1
},
{
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "width": 58,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "propagateClick": true,
 "height": 58,
 "mode": "push",
 "paddingRight": 0,
 "shadow": false,
 "maxWidth": 58,
 "transparencyActive": true,
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "IconButton",
 "paddingTop": 0,
 "maxHeight": 58,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "data": {
  "name": "IconButton VR"
 },
 "visible": false,
 "cursor": "hand",
 "minHeight": 1
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3, this.camera_EA22383F_E5E7_2733_41C0_BAE738CCEFBC); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.06,
   "hfov": 24.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CC531F50_C76B_E989_41CC_C08A845C75A4_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.3
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_F336DEC6_DC28_ED67_41B9_FA944DF7DFCE",
   "pitch": -31.3,
   "yaw": 8.06,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 24.27,
   "distance": 100
  }
 ],
 "id": "overlay_CC00F081_D4D8_D5DD_41D1_0FC281AE5941",
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C, this.camera_EA9A5738_E5E7_293C_41E0_036BF1395A5B); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 170.06,
   "hfov": 22.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.2
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_F335AECC_DC28_ED6B_41EA_4F143B7E2D65",
   "pitch": -36.2,
   "yaw": 170.06,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.92,
   "distance": 100
  }
 ],
 "id": "overlay_CB4765B0_D4DB_BF3B_41E9_0A3E363FE585",
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.66,
   "hfov": 23.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.98
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_F33A5ECD_DC28_ED65_41AA_5A47EF8EFF6F",
   "pitch": -34.98,
   "yaw": 7.66,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.27,
   "distance": 100
  }
 ],
 "id": "overlay_CC049CB2_D4D8_6D3F_41B7_C6627ABCD4FF",
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CC576610_C76C_3B88_4193_F68FB2AA6CB0, this.camera_EA75B7B9_E5E7_293C_41C9_89C2D4795789); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -20.98,
   "hfov": 21.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CC550FC9_C76C_2898_41E6_A443231A9930_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -41.11
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_F3384ED5_DC28_ED65_41D6_4699AFA2D365",
   "pitch": -41.11,
   "yaw": -20.98,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.4,
   "distance": 100
  }
 ],
 "id": "overlay_CCC8FF03_D4D9_ACDD_41D6_110AA3246D28",
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B, this.camera_EA4787E6_E5E7_2954_41D6_21A1A7B7D218); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 85.38,
   "hfov": 21.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CC550FC9_C76C_2898_41E6_A443231A9930_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.3
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_F3381ED5_DC28_ED65_41E5_D4EA570692C4",
   "pitch": -40.3,
   "yaw": 85.38,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.66,
   "distance": 100
  }
 ],
 "id": "overlay_CC90EC22_D4D9_ACDF_41CF_CFE8AF0D2E7B",
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 154.93,
   "hfov": 23.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CC550FC9_C76C_2898_41E6_A443231A9930_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.8
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_F338EED6_DC28_ED67_41E8_14AB41374EDE",
   "pitch": -35.8,
   "yaw": 154.93,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.04,
   "distance": 100
  }
 ],
 "id": "overlay_CB76DA17_D4D9_D4E5_41E5_1C1470960BA2",
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.98,
   "hfov": 23.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.34
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_F3372EC9_DC28_ED6D_41C9_1D84E823B419",
   "pitch": -33.34,
   "yaw": -2.98,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.73,
   "distance": 100
  }
 ],
 "id": "overlay_CB1960C8_D4D8_D56B_41CE_1E26E5AD223D",
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CC531F50_C76B_E989_41CC_C08A845C75A4, this.camera_EAAC16B2_E5E7_2BCC_41E5_5B411A75AE20); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -99.94,
   "hfov": 25.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.34
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_F337AECA_DC28_ED6F_41CC_668AAFA9D701",
   "pitch": -24.34,
   "yaw": -99.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.88,
   "distance": 100
  }
 ],
 "id": "overlay_CBBD86DD_D4D8_BD65_41CC_314492182DC7",
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539, this.camera_EA65378D_E5E7_29D4_41EB_19DD0BB5FB45); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 119.34,
   "hfov": 21.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CC58C2A5_C76C_F888_41DF_46B1E6A3B443_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -41.93
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_F33B5ED3_DC28_ED7D_41E4_2728A4DBDC83",
   "pitch": -41.93,
   "yaw": 119.34,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.13,
   "distance": 100
  }
 ],
 "id": "overlay_CCBB1094_D4D8_D5FB_4170_19FC0E24AD81",
 "data": {
  "label": "Arrow 04b"
 }
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
 "left": "0%",
 "width": 66,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
  "this.IconButton_7FF185EF_706F_7FC6_41A5_21B418265412"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "layout": "absolute",
 "paddingRight": 0,
 "height": "100%",
 "shadow": false,
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- COLLAPSE"
 },
 "visible": false,
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_6396DD92_74B8_852E_41C7_7F2F88EAB543",
 "left": "0%",
 "children": [
  "this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36"
 ],
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "verticalAlign": "top",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "0%",
 "layout": "absolute",
 "paddingRight": 0,
 "height": "100%",
 "borderSize": 0,
 "shadow": false,
 "gap": 10,
 "paddingBottom": 0,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- EXPANDED"
 },
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "overflow": "visible",
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "layout": "horizontal",
 "height": 110,
 "paddingRight": 0,
 "shadow": false,
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "button menu sup"
 },
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "backgroundOpacity": 0,
 "right": "0%",
 "width": "91.304%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "verticalAlign": "top",
 "propagateClick": true,
 "scrollBarWidth": 10,
 "bottom": "0%",
 "layout": "vertical",
 "paddingRight": 0,
 "height": "85.959%",
 "shadow": false,
 "gap": 3,
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set"
 },
 "visible": false,
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "shadowHorizontalLength": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_B996F276_9408_0C36_41E2_08CB6C07DEDA",
 "left": "15%",
 "children": [
  "this.Container_B996E276_9408_0C36_41BD_AC0FB14B3FE5",
  "this.Container_B9968277_9408_0C36_41DF_7DD400E5DB38"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "10%",
 "bottom": "10%",
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "shadow": true,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_B9961277_9408_0C36_41DA_ACC35EB11535",
 "left": "15%",
 "children": [
  "this.IconButton_B9960277_9408_0C36_41B1_6ED361CB8F52"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "15%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "overflow": "visible",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "10%",
 "bottom": "80%",
 "layout": "vertical",
 "paddingRight": 20,
 "shadow": false,
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 20,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "shadowHorizontalLength": 0,
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "overflow": "visible",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "10%",
 "bottom": "10%",
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "shadow": true,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "shadowHorizontalLength": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "10%",
 "bottom": "10%",
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "shadow": true,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "15%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "overflow": "visible",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "10%",
 "bottom": "80%",
 "layout": "vertical",
 "paddingRight": 20,
 "shadow": false,
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 20,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "shadowHorizontalLength": 0,
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "overflow": "visible",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "10%",
 "bottom": "10%",
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "shadow": true,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "shadowHorizontalLength": 0,
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "overflow": "visible",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "10%",
 "bottom": "10%",
 "layout": "vertical",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "shadow": true,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "shadowHorizontalLength": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_A5AA03AD_9408_0CD5_41E2_1543D1B93E75",
 "left": "15%",
 "children": [
  "this.Container_A5AA13AD_9408_0CD5_41CF_FB4C29E2A478",
  "this.Container_A5A9F3AD_9408_0CD5_41A0_74FB092FB5C4"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "10%",
 "bottom": "10%",
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "shadow": true,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_A5A903AD_9408_0CD5_41D1_FB45B5BD272C",
 "left": "15%",
 "children": [
  "this.IconButton_A5A913AD_9408_0CD5_41C1_92AE50E89242"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "15%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "overflow": "visible",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "10%",
 "bottom": "80%",
 "layout": "vertical",
 "paddingRight": 20,
 "shadow": false,
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 20,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CC505962_C76C_6989_41D1_B3BF98D5D11C_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F33B1ED4_DC28_ED7B_41DD_FE018960108E",
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CC505962_C76C_6989_41D1_B3BF98D5D11C_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F33BEED4_DC28_ED7B_41C2_D7B2292D80AC",
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F3357ECC_DC28_ED6B_41E8_1FB797BD3F14",
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CC2EE218_D428_74EB_41EA_1AAA90A13F1C_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F3353ECC_DC28_ED6B_41E8_E3961C023A97",
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F3345ECA_DC28_ED6F_41EA_CD8898883738",
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F3342ECB_DC28_ED6D_41DB_470E2233665D",
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CD0C8126_D4D9_B727_41E0_47F2BC38067B_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F3349ECB_DC28_ED6D_41C5_377AA461D1EC",
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CC55C875_C76C_778B_41C5_19787223E6DD_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F3391ED7_DC28_ED65_41D1_F5F01FA0A648",
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CC55C875_C76C_778B_41C5_19787223E6DD_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F339DED7_DC28_ED65_41D2_69D0B8BE8767",
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CC576610_C76C_3B88_4193_F68FB2AA6CB0_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F3389ED6_DC28_ED67_41E2_0A5D0A5D2E2E",
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F33A2ED2_DC28_ED7F_41E0_9279890965DA",
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CC2EDC7C_C76C_6879_41C8_B3227C3C9539_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F33AFED3_DC28_ED7D_41E2_1755F75AA3EF",
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CC531F50_C76B_E989_41CC_C08A845C75A4_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F336DEC6_DC28_ED67_41B9_FA944DF7DFCE",
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F335AECC_DC28_ED6B_41EA_4F143B7E2D65",
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CC54853C_C76C_19F8_41E4_D2B897E7BD38_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F33A5ECD_DC28_ED65_41AA_5A47EF8EFF6F",
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CC550FC9_C76C_2898_41E6_A443231A9930_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F3384ED5_DC28_ED65_41D6_4699AFA2D365",
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CC550FC9_C76C_2898_41E6_A443231A9930_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F3381ED5_DC28_ED65_41E5_D4EA570692C4",
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CC550FC9_C76C_2898_41E6_A443231A9930_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F338EED6_DC28_ED67_41E8_14AB41374EDE",
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F3372EC9_DC28_ED6D_41C9_1D84E823B419",
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CC86D263_C76C_1B88_41E1_B1E90B8EADD3_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F337AECA_DC28_ED6F_41CC_668AAFA9D701",
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CC58C2A5_C76C_F888_41DF_46B1E6A3B443_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F33B5ED3_DC28_ED7D_41E4_2728A4DBDC83",
 "frameCount": 21
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
 "left": "0%",
 "width": 36,
 "backgroundOpacity": 0.4,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "layout": "absolute",
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "borderSize": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingTop": 0,
 "class": "Container",
 "height": "100%",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container black"
 },
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "cursor": "hand",
 "horizontalAlign": "center",
 "id": "IconButton_7FF185EF_706F_7FC6_41A5_21B418265412",
 "left": 10,
 "width": 44,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_rollover.png",
 "propagateClick": true,
 "top": "40%",
 "bottom": "40%",
 "paddingRight": 0,
 "mode": "push",
 "shadow": false,
 "maxWidth": 50,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "borderSize": 0,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, true, 0, null, null, false)",
 "maxHeight": 50,
 "iconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412.png",
 "data": {
  "name": "IconButton arrow"
 },
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
 "left": "0%",
 "width": 300,
 "backgroundOpacity": 0.7,
 "overflow": "scroll",
 "children": [
  "this.Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
  "this.Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
  "this.IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
  "this.Image_EE8CA6EE_E04F_AEF7_41D5_2041BE9F8665"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "layout": "absolute",
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "top",
 "paddingRight": 40,
 "borderSize": 0,
 "shadow": false,
 "paddingBottom": 40,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingTop": 40,
 "class": "Container",
 "height": "100%",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container"
 },
 "paddingLeft": 40,
 "minHeight": 1
},
{
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "backgroundOpacity": 0,
 "width": 58,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "propagateClick": true,
 "height": 58,
 "mode": "push",
 "paddingRight": 0,
 "shadow": false,
 "maxWidth": 58,
 "transparencyActive": true,
 "click": "this.shareTwitter(window.location.href)",
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "IconButton",
 "paddingTop": 0,
 "maxHeight": 58,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "data": {
  "name": "IconButton TWITTER"
 },
 "cursor": "hand",
 "minHeight": 1
},
{
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "backgroundOpacity": 0,
 "width": 58,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "propagateClick": true,
 "height": 58,
 "mode": "push",
 "paddingRight": 0,
 "shadow": false,
 "maxWidth": 58,
 "transparencyActive": true,
 "click": "this.shareFacebook(window.location.href)",
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "IconButton",
 "paddingTop": 0,
 "maxHeight": 58,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "data": {
  "name": "IconButton FB"
 },
 "cursor": "hand",
 "minHeight": 1
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_B996E276_9408_0C36_41BD_AC0FB14B3FE5",
 "children": [
  "this.Image_B9969276_9408_0C37_41C5_602B653AB535"
 ],
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "width": "85%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "layout": "absolute",
 "backgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingTop": 0,
 "borderSize": 0,
 "class": "Container",
 "height": "100%",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_B9968277_9408_0C36_41DF_7DD400E5DB38",
 "children": [
  "this.Container_B996B277_9408_0C36_41DE_565BF2C78252",
  "this.Container_B996A277_9408_0C36_41D0_24FA1ED91987",
  "this.Container_B9966277_9408_0C36_41DC_B82E2315D81F"
 ],
 "backgroundOpacity": 1,
 "overflow": "visible",
 "width": "50%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 460,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 50,
 "shadow": false,
 "paddingBottom": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingTop": 20,
 "borderSize": 0,
 "class": "Container",
 "height": "100%",
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "paddingLeft": 50,
 "minHeight": 1
},
{
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "id": "IconButton_B9960277_9408_0C36_41B1_6ED361CB8F52",
 "width": "25%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minWidth": 50,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_B9960277_9408_0C36_41B1_6ED361CB8F52_rollover.jpg",
 "propagateClick": false,
 "paddingRight": 0,
 "mode": "push",
 "height": "75%",
 "shadow": false,
 "maxWidth": 60,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_B9960277_9408_0C36_41B1_6ED361CB8F52_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "borderSize": 0,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_B9963277_9408_0C36_41CA_3B48C00545A9, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "maxHeight": 60,
 "iconURL": "skin/IconButton_B9960277_9408_0C36_41B1_6ED361CB8F52.jpg",
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_B9960277_9408_0C36_41B1_6ED361CB8F52_pressed_rollover.jpg",
 "cursor": "hand",
 "minHeight": 50
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingRight": 0,
 "height": 140,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingTop": 0,
 "borderSize": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "horizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "width": "100%",
 "itemBorderRadius": 0,
 "backgroundOpacity": 0,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "scrollBarMargin": 2,
 "rollOverItemLabelFontColor": "#04A3E1",
 "minWidth": 1,
 "itemMinHeight": 50,
 "verticalAlign": "middle",
 "itemVerticalAlign": "top",
 "itemPaddingLeft": 3,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "itemOpacity": 1,
 "paddingRight": 70,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "itemThumbnailOpacity": 1,
 "itemMinWidth": 50,
 "height": "92%",
 "itemBackgroundColor": [],
 "itemPaddingTop": 3,
 "borderSize": 0,
 "itemBackgroundColorRatios": [],
 "itemPaddingRight": 3,
 "class": "ThumbnailGrid",
 "scrollBarColor": "#04A3E1",
 "itemHeight": 160,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "paddingLeft": 70,
 "itemLabelFontWeight": "normal",
 "itemThumbnailHeight": 125,
 "rollOverItemThumbnailShadow": true,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 16,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "borderRadius": 5,
 "itemLabelGap": 7,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": false,
 "bottom": -0.2,
 "itemThumbnailWidth": 220,
 "itemLabelFontColor": "#666666",
 "selectedItemThumbnailShadow": true,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemHorizontalAlign": "center",
 "shadow": false,
 "gap": 26,
 "itemMaxHeight": 1000,
 "itemWidth": 220,
 "itemPaddingBottom": 3,
 "itemMaxWidth": 1000,
 "paddingBottom": 70,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "italic",
 "itemMode": "normal",
 "paddingTop": 10,
 "data": {
  "name": "ThumbnailList"
 },
 "selectedItemLabelFontWeight": "bold",
 "itemThumbnailBorderRadius": 0,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "minHeight": 1,
 "itemLabelFontFamily": "Oswald"
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "width": "100%",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "borderSize": 0,
 "class": "WebFrame",
 "height": "100%",
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame48191"
 },
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "width": "25%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minWidth": 50,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "propagateClick": false,
 "paddingRight": 0,
 "mode": "push",
 "height": "75%",
 "shadow": false,
 "maxWidth": 60,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "borderSize": 0,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "maxHeight": 60,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "data": {
  "name": "X"
 },
 "cursor": "hand",
 "minHeight": 50
},
{
 "minHeight": 1,
 "progressBarBorderSize": 0,
 "id": "MapViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minWidth": 1,
 "playbackBarProgressBorderColor": "#000000",
 "progressBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "paddingRight": 0,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "height": "99.975%",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "class": "ViewerArea",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "paddingLeft": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "shadow": false,
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "height": 140,
 "paddingRight": 0,
 "shadow": false,
 "gap": 10,
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "backgroundOpacity": 0.3,
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingTop": 0,
 "borderSize": 0,
 "class": "Container",
 "height": "100%",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container photo"
 },
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_A5AA13AD_9408_0CD5_41CF_FB4C29E2A478",
 "children": [
  "this.Image_A5A9E3AD_9408_0CD5_41BF_1F19E227F697"
 ],
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "width": "55%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "layout": "absolute",
 "backgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingTop": 0,
 "borderSize": 0,
 "class": "Container",
 "height": "100%",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_A5A9F3AD_9408_0CD5_41A0_74FB092FB5C4",
 "children": [
  "this.Container_A5A9C3AD_9408_0CD5_41E1_5A6AE955D023",
  "this.Container_A5A983AD_9408_0CD5_41D3_D89DBFF204CA",
  "this.Container_A5A923AD_9408_0CD5_41CF_063715D940B6"
 ],
 "backgroundOpacity": 1,
 "overflow": "visible",
 "width": "45%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 460,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 60,
 "shadow": false,
 "paddingBottom": 20,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingTop": 20,
 "borderSize": 0,
 "class": "Container",
 "height": "100%",
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "paddingLeft": 60,
 "minHeight": 1
},
{
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "id": "IconButton_A5A913AD_9408_0CD5_41C1_92AE50E89242",
 "width": "25%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minWidth": 50,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_A5A913AD_9408_0CD5_41C1_92AE50E89242_rollover.jpg",
 "propagateClick": false,
 "paddingRight": 0,
 "mode": "push",
 "height": "75%",
 "shadow": false,
 "maxWidth": 60,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_A5A913AD_9408_0CD5_41C1_92AE50E89242_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "borderSize": 0,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_A5A8F3AD_9408_0CD5_41D1_81A13D72D5FD, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "maxHeight": 60,
 "iconURL": "skin/IconButton_A5A913AD_9408_0CD5_41C1_92AE50E89242.jpg",
 "data": {
  "name": "X"
 },
 "pressedRollOverIconURL": "skin/IconButton_A5A913AD_9408_0CD5_41C1_92AE50E89242_pressed_rollover.jpg",
 "cursor": "hand",
 "minHeight": 50
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
 "children": [
  "this.Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
  "this.Button_7DB31382_7065_343F_41D6_641BBE1B2562",
  "this.Container_7DB30382_7065_343F_416C_8610BCBA9F50",
  "this.Button_7DB33382_7065_343F_41B1_0B0F019C1828",
  "this.Container_7DB32382_7065_343F_419E_6594814C420F",
  "this.Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
  "this.Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
  "this.Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
  "this.Container_7DBC9382_7065_343F_41CC_ED357655BB95",
  "this.Button_7DBC8382_7065_343F_4183_17B44518DB40",
  "this.Container_7DBCB382_7065_343F_41D8_AB382D384291",
  "this.Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
  "this.Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "overflow": "scroll",
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "10%",
 "bottom": "40%",
 "layout": "vertical",
 "paddingRight": 0,
 "shadow": false,
 "paddingBottom": 0,
 "gap": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container buttons"
 },
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
 "left": "0%",
 "children": [
  "this.Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
  "this.Container_66588837_74AF_8B56_41CA_E204728E8E6C",
  "this.HTMLText_7DB2E382_7065_343F_41C2_951F708170F1"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "verticalAlign": "top",
 "borderRadius": 0,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "layout": "vertical",
 "height": 34,
 "paddingRight": 0,
 "borderSize": 0,
 "shadow": false,
 "gap": 10,
 "paddingBottom": 0,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container footer"
 },
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "cursor": "hand",
 "horizontalAlign": "center",
 "id": "IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
 "left": 0,
 "width": 42,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4_rollover.png",
 "propagateClick": true,
 "bottom": "0%",
 "height": 42,
 "mode": "push",
 "paddingRight": 0,
 "shadow": false,
 "maxWidth": 80,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "borderSize": 0,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "maxHeight": 80,
 "iconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4.png",
 "data": {
  "name": "IconButton collapse"
 },
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "horizontalAlign": "center",
 "id": "Image_EE8CA6EE_E04F_AEF7_41D5_2041BE9F8665",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "url": "skin/Image_EE8CA6EE_E04F_AEF7_41D5_2041BE9F8665.jpeg",
 "propagateClick": false,
 "bottom": "8.8%",
 "paddingRight": 0,
 "height": "29.45%",
 "borderSize": 0,
 "shadow": false,
 "maxWidth": 1080,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "maxHeight": 1079,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image2307"
 },
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "horizontalAlign": "center",
 "id": "Image_B9969276_9408_0C37_41C5_602B653AB535",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "url": "skin/Image_B9969276_9408_0C37_41C5_602B653AB535.jpg",
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "height": "100%",
 "borderSize": 0,
 "shadow": false,
 "maxWidth": 2000,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "maxHeight": 1000,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_B996B277_9408_0C36_41DE_565BF2C78252",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "paddingRight": 0,
 "height": 50,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingTop": 20,
 "borderSize": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "paddingLeft": 0,
 "minHeight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_B996A277_9408_0C36_41D0_24FA1ED91987",
 "children": [
  "this.HTMLText_B9965277_9408_0C36_41B1_EBD814D91886",
  "this.Button_B9967277_9408_0C36_41E1_F924D3C0FF3B"
 ],
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 100,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "shadow": false,
 "paddingBottom": 10,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingTop": 0,
 "borderSize": 0,
 "class": "Container",
 "height": "100%",
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "paddingLeft": 0,
 "minHeight": 300
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_B9966277_9408_0C36_41DC_B82E2315D81F",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "paddingRight": 0,
 "height": 30,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingTop": 0,
 "borderSize": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "paddingLeft": 0,
 "horizontalAlign": "right",
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "width": "100%",
 "backgroundOpacity": 0,
 "right": 20,
 "borderRadius": 0,
 "minWidth": 50,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "propagateClick": false,
 "top": 20,
 "paddingRight": 0,
 "mode": "push",
 "height": "36.14%",
 "shadow": false,
 "maxWidth": 60,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "borderSize": 0,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "maxHeight": 60,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand",
 "minHeight": 50
},
{
 "paddingLeft": 0,
 "horizontalAlign": "right",
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "width": "100%",
 "backgroundOpacity": 0,
 "right": 20,
 "borderRadius": 0,
 "minWidth": 50,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "propagateClick": false,
 "top": 20,
 "paddingRight": 0,
 "mode": "push",
 "height": "36.14%",
 "shadow": false,
 "maxWidth": 60,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "borderSize": 0,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "maxHeight": 60,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand",
 "minHeight": 50
},
{
 "minHeight": 1,
 "progressBarBorderSize": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minWidth": 1,
 "playbackBarProgressBorderColor": "#000000",
 "progressBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "paddingRight": 0,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "height": "100%",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "class": "ViewerArea",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "paddingLeft": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "shadow": false,
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "cursor": "hand",
 "horizontalAlign": "center",
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "width": "14.22%",
 "backgroundOpacity": 0,
 "minWidth": 50,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "top": "20%",
 "propagateClick": true,
 "bottom": "20%",
 "paddingRight": 0,
 "mode": "push",
 "borderSize": 0,
 "shadow": false,
 "maxWidth": 60,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "transparencyActive": false,
 "paddingTop": 0,
 "class": "IconButton",
 "maxHeight": 60,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "data": {
  "name": "IconButton <"
 },
 "paddingLeft": 0,
 "minHeight": 50
},
{
 "cursor": "hand",
 "horizontalAlign": "center",
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "width": "14.22%",
 "backgroundOpacity": 0,
 "right": 10,
 "borderRadius": 0,
 "minWidth": 50,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "top": "20%",
 "propagateClick": true,
 "bottom": "20%",
 "paddingRight": 0,
 "mode": "push",
 "shadow": false,
 "maxWidth": 60,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "transparencyActive": false,
 "paddingTop": 0,
 "borderSize": 0,
 "class": "IconButton",
 "maxHeight": 60,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "data": {
  "name": "IconButton >"
 },
 "paddingLeft": 0,
 "minHeight": 50
},
{
 "paddingLeft": 0,
 "horizontalAlign": "right",
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "width": "10%",
 "backgroundOpacity": 0,
 "right": 20,
 "borderRadius": 0,
 "minWidth": 50,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "propagateClick": true,
 "top": 20,
 "paddingRight": 0,
 "mode": "push",
 "height": "10%",
 "shadow": false,
 "maxWidth": 60,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "borderSize": 0,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "maxHeight": 60,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand",
 "minHeight": 50
},
{
 "horizontalAlign": "center",
 "id": "Image_A5A9E3AD_9408_0CD5_41BF_1F19E227F697",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "minWidth": 1,
 "verticalAlign": "bottom",
 "borderRadius": 0,
 "url": "skin/Image_A5A9E3AD_9408_0CD5_41BF_1F19E227F697.jpg",
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "height": "100%",
 "borderSize": 0,
 "shadow": false,
 "maxWidth": 2000,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "maxHeight": 1000,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image40635"
 },
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_A5A9C3AD_9408_0CD5_41E1_5A6AE955D023",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "paddingTop": 20,
 "borderSize": 0,
 "class": "Container",
 "height": "5%",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "paddingLeft": 0,
 "minHeight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_A5A983AD_9408_0CD5_41D3_D89DBFF204CA",
 "children": [
  "this.HTMLText_A5A993AD_9408_0CD5_41E1_993F2394EAE8",
  "this.Container_A5A963AD_9408_0CD5_41BA_9AB3D9F15CDB"
 ],
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 100,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "layout": "vertical",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "shadow": false,
 "paddingBottom": 30,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingTop": 0,
 "borderSize": 0,
 "class": "Container",
 "height": "100%",
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "paddingLeft": 0,
 "minHeight": 520
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_A5A923AD_9408_0CD5_41CF_063715D940B6",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "paddingRight": 0,
 "height": 40,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingTop": 0,
 "borderSize": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingRight": 0,
 "height": 1,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingTop": 0,
 "borderSize": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "paddingLeft": 10,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_7DB31382_7065_343F_41D6_641BBE1B2562",
 "width": "100%",
 "layout": "horizontal",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundOpacity": 0,
 "click": "this.openLink('https://wa.me/553430213041', '_blank')",
 "iconHeight": 32,
 "borderRadius": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "height": 50,
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "shadow": false,
 "label": "WhatsApp",
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "paddingTop": 0,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "textDecoration": "none",
 "iconWidth": 32,
 "data": {
  "name": "Button Tour Info"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "minHeight": 1,
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB30382_7065_343F_416C_8610BCBA9F50",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingRight": 0,
 "height": 1,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingTop": 0,
 "borderSize": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "paddingLeft": 10,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_7DB33382_7065_343F_41B1_0B0F019C1828",
 "width": "100%",
 "layout": "horizontal",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundOpacity": 0,
 "click": "this.openLink('https://www.facebook.com/salebrasatonabrasa', '_blank')",
 "iconHeight": 32,
 "borderRadius": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "height": 50,
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "shadow": false,
 "label": "Facebook",
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 23,
 "paddingTop": 0,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "textDecoration": "none",
 "iconWidth": 32,
 "data": {
  "name": "Button Panorama List"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "minHeight": 1,
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB32382_7065_343F_419E_6594814C420F",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingRight": 0,
 "height": 1,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingTop": 0,
 "borderSize": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "pressedLabel": "Location",
 "paddingLeft": 10,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
 "width": "100%",
 "layout": "horizontal",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundOpacity": 0,
 "click": "this.openLink('https://www.instagram.com/salebrasa_tonabrasa/', '_blank')",
 "iconHeight": 32,
 "borderRadius": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "height": 50,
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "shadow": false,
 "label": "Instagram",
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "paddingTop": 0,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "textDecoration": "none",
 "iconWidth": 32,
 "data": {
  "name": "Button Location"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "minHeight": 1,
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingRight": 0,
 "height": 1,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingTop": 0,
 "borderSize": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "paddingLeft": 10,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
 "width": "100%",
 "layout": "horizontal",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundOpacity": 0,
 "click": "this.openLink('tel:03432461459', '_blank')",
 "iconHeight": 32,
 "borderRadius": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "height": 50,
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "shadow": false,
 "label": "Telefone Fixo",
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "paddingTop": 0,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "textDecoration": "none",
 "iconWidth": 32,
 "data": {
  "name": "Button Floorplan"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "minHeight": 1,
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DBC9382_7065_343F_41CC_ED357655BB95",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingRight": 0,
 "height": 1,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingTop": 0,
 "borderSize": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "paddingLeft": 10,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_7DBC8382_7065_343F_4183_17B44518DB40",
 "width": "100%",
 "layout": "horizontal",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundOpacity": 0,
 "click": "this.openLink('https://sites.google.com/view/cardapio-digital-sal-e-brasa/home', '_blank')",
 "iconHeight": 32,
 "borderRadius": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "height": 50,
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "shadow": false,
 "label": "Card\u00e1pio",
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "paddingTop": 0,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "textDecoration": "none",
 "iconWidth": 32,
 "data": {
  "name": "Button Photoalbum"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "minHeight": 1,
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DBCB382_7065_343F_41D8_AB382D384291",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingRight": 0,
 "height": 1,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingTop": 0,
 "borderSize": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "paddingLeft": 10,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
 "width": "100%",
 "layout": "horizontal",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "backgroundOpacity": 0,
 "click": "this.openLink('https://www.google.com/maps/place/Sal+e+Brasa+e+%23tonabraza/@-18.6291178,-48.1838471,17z/data=!3m1!4b1!4m5!3m4!1s0x94a431a1415c7f0f:0xd56c5a4346f71de4!8m2!3d-18.6291229!4d-48.1816584', '_blank')",
 "iconHeight": 32,
 "borderRadius": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "height": 50,
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 18,
 "shadow": false,
 "label": "Localiza\u00e7\u00e3o",
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "paddingTop": 0,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "textDecoration": "none",
 "iconWidth": 32,
 "data": {
  "name": "Button Contact"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "minHeight": 1,
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingRight": 0,
 "height": 1,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingTop": 0,
 "borderSize": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
 "backgroundOpacity": 1,
 "width": 40,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "paddingRight": 0,
 "height": 2,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingTop": 0,
 "borderSize": 0,
 "class": "Container",
 "backgroundColor": [
  "#5CA1DE"
 ],
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "blue line"
 },
 "visible": false,
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_66588837_74AF_8B56_41CA_E204728E8E6C",
 "children": [
  "this.IconButton_66589837_74AF_8B56_41D7_A6F4FAC02CC3",
  "this.IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57",
  "this.IconButton_6658F838_74AF_8B5A_41C1_8DA59962CFF4",
  "this.IconButton_6658C838_74AF_8B5A_418E_C797984D8CAE",
  "this.IconButton_6658D838_74AF_8B5A_41D7_154D466041BB"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "height": 40,
 "paddingRight": 0,
 "shadow": false,
 "gap": 16,
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container settings"
 },
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "height": 78,
 "paddingRight": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "HTMLText",
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText47602"
 },
 "visible": false,
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_B9965277_9408_0C36_41B1_EBD814D91886",
 "width": "100%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 20,
 "borderSize": 0,
 "class": "HTMLText",
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.46vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.98vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.98vh;font-family:'Oswald';\"><B><I>DOLOR SIT AME</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.49vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.49vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.49vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.66vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.49vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.49vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.82vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 },
 "paddingLeft": 10,
 "minHeight": 1
},
{
 "paddingLeft": 0,
 "fontFamily": "Oswald",
 "horizontalAlign": "center",
 "id": "Button_B9967277_9408_0C36_41E1_F924D3C0FF3B",
 "backgroundOpacity": 0.7,
 "width": 180,
 "layout": "horizontal",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "iconHeight": 32,
 "borderRadius": 50,
 "minWidth": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "mode": "push",
 "height": 50,
 "fontSize": "2.39vh",
 "shadow": false,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "label": "LOREM IPSUM",
 "fontStyle": "italic",
 "paddingTop": 0,
 "borderSize": 0,
 "class": "Button",
 "backgroundColor": [
  "#04A3E1"
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "textDecoration": "none",
 "iconWidth": 32,
 "data": {
  "name": "Button31015"
 },
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "minHeight": 1,
 "fontWeight": "bold"
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_A5A993AD_9408_0CD5_41E1_993F2394EAE8",
 "width": "100%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "height": "46%",
 "shadow": false,
 "paddingBottom": 10,
 "borderSize": 0,
 "class": "HTMLText",
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.46vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.98vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.98vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_A5A963AD_9408_0CD5_41BA_9AB3D9F15CDB",
 "children": [
  "this.Image_A5A973AD_9408_0CD5_41C4_50A6AD2BD681",
  "this.HTMLText_A5A943AD_9408_0CD5_41DD_7A51684E2843"
 ],
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "shadow": false,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingTop": 0,
 "borderSize": 0,
 "class": "Container",
 "height": "75%",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "horizontalAlign": "left",
 "id": "Image_A5A973AD_9408_0CD5_41C4_50A6AD2BD681",
 "width": "25%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "url": "skin/Image_A5A973AD_9408_0CD5_41C4_50A6AD2BD681.jpg",
 "propagateClick": false,
 "paddingRight": 0,
 "height": "100%",
 "shadow": false,
 "maxWidth": 200,
 "paddingBottom": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "class": "Image",
 "maxHeight": 200,
 "scaleMode": "fit_inside",
 "data": {
  "name": "agent photo"
 },
 "paddingLeft": 0,
 "minHeight": 1
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_A5A943AD_9408_0CD5_41DD_7A51684E2843",
 "width": "75%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 10,
 "borderSize": 0,
 "class": "HTMLText",
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.49vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.49vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.66vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.66vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.66vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.66vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText19460"
 },
 "paddingLeft": 10,
 "minHeight": 1
}],
 "vrPolyfillScale": 0.7,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_6658D838_74AF_8B5A_41D7_154D466041BB,this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57,this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "paddingRight": 0,
 "mobileMipmappingEnabled": false,
 "backgroundPreloadEnabled": true,
 "shadow": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "class": "Player",
 "height": "100%",
 "contentOpaque": false,
 "buttonToggleFullscreen": [
  "this.IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0"
 ],
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player468"
 },
 "scripts": {
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "existsKey": function(key){  return key in window; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getKey": function(key){  return window[key]; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "registerKey": function(key, value){  window[key] = value; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "unregisterKey": function(key){  delete window[key]; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; }
 },
 "gap": 10,
 "layout": "absolute",
 "downloadEnabled": false,
 "paddingLeft": 0,
 "minHeight": 20
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
