"use strict";(self.webpackChunkmoving_average_plus_docs=self.webpackChunkmoving_average_plus_docs||[]).push([[53],{1109:t=>{t.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"\ud83d\udcbe Installation","href":"/DataTomeDocs/docs/intro","docId":"intro"},{"type":"category","label":"Moving Average Methods","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\ud83d\udce6 Moving Average Methods","href":"/DataTomeDocs/docs/mvavg-methods/intro","docId":"mvavg-methods/intro"},{"type":"link","label":"\ud83d\udee0 Constructor","href":"/DataTomeDocs/docs/mvavg-methods/constructor","docId":"mvavg-methods/constructor"},{"type":"category","label":"Input/Output Methods","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\ud83d\udce5 Push","href":"/DataTomeDocs/docs/mvavg-methods/input-output/push","docId":"mvavg-methods/input-output/push"},{"type":"link","label":"\ud83d\udce4 Get","href":"/DataTomeDocs/docs/mvavg-methods/input-output/get","docId":"mvavg-methods/input-output/get"},{"type":"link","label":"\ud83d\udce4 Get By Brute","href":"/DataTomeDocs/docs/mvavg-methods/input-output/get-by-brute","docId":"mvavg-methods/input-output/get-by-brute"},{"type":"link","label":"\u27a1\ufe0f Front","href":"/DataTomeDocs/docs/mvavg-methods/input-output/front","docId":"mvavg-methods/input-output/front"},{"type":"link","label":"\u2b05\ufe0f Back","href":"/DataTomeDocs/docs/mvavg-methods/input-output/back","docId":"mvavg-methods/input-output/back"},{"type":"link","label":"\ud83d\udccd Operator[]","href":"/DataTomeDocs/docs/mvavg-methods/input-output/operator-index","docId":"mvavg-methods/input-output/operator-index"},{"type":"link","label":"\ud83d\udccd AtIndex","href":"/DataTomeDocs/docs/mvavg-methods/input-output/at-index","docId":"mvavg-methods/input-output/at-index"},{"type":"link","label":"\ud83d\udccf Size","href":"/DataTomeDocs/docs/mvavg-methods/input-output/size","docId":"mvavg-methods/input-output/size"}],"href":"/DataTomeDocs/docs/category/inputoutput-methods"},{"type":"category","label":"Array Methods","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\ud83d\udcd0 Resize","href":"/DataTomeDocs/docs/mvavg-methods/array-methods/resize","docId":"mvavg-methods/array-methods/resize"},{"type":"link","label":"\ud83e\uddf9 Clear","href":"/DataTomeDocs/docs/mvavg-methods/array-methods/clear","docId":"mvavg-methods/array-methods/clear"}],"href":"/DataTomeDocs/docs/category/array-methods"},{"type":"category","label":"Partials","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\ud83d\udcca The Partials Concept","href":"/DataTomeDocs/docs/mvavg-methods/partials/intro","docId":"mvavg-methods/partials/intro"},{"type":"link","label":"\ud83d\udee0 Create Partial","href":"/DataTomeDocs/docs/mvavg-methods/partials/create-partial","docId":"mvavg-methods/partials/create-partial"},{"type":"link","label":"\ud83d\udce4 Get Partial","href":"/DataTomeDocs/docs/mvavg-methods/partials/get-partial","docId":"mvavg-methods/partials/get-partial"}],"href":"/DataTomeDocs/docs/category/partials"}],"href":"/DataTomeDocs/docs/category/moving-average-methods"},{"type":"category","label":"Analysis Methods","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\ud83d\udce6 Analysis Methods","href":"/DataTomeDocs/docs/analysis-methods/intro","docId":"analysis-methods/intro"}],"href":"/DataTomeDocs/docs/category/analysis-methods"}]},"docs":{"analysis-methods/intro":{"id":"analysis-methods/intro","title":"\ud83d\udce6 Analysis Methods","description":"The DataTomeAnalysis class abstracts the implementation of a circular array in order to calculate the arithmetic average of its members.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"\ud83d\udcbe Installation","description":"1. Clone the repository and download the zip file at https://github.com/AlexandreHiroyuki/DataTome.","sidebar":"tutorialSidebar"},"mvavg-methods/array-methods/clear":{"id":"mvavg-methods/array-methods/clear","title":"\ud83e\uddf9 Clear","description":"Clears the average back to 0, \\\\*\\\\*including its initial size\\\\\\\\.","sidebar":"tutorialSidebar"},"mvavg-methods/array-methods/resize":{"id":"mvavg-methods/array-methods/resize","title":"\ud83d\udcd0 Resize","description":"Changes the array size.","sidebar":"tutorialSidebar"},"mvavg-methods/constructor":{"id":"mvavg-methods/constructor","title":"\ud83d\udee0 Constructor","description":"\ud83d\udcdd Syntax","sidebar":"tutorialSidebar"},"mvavg-methods/input-output/at-index":{"id":"mvavg-methods/input-output/at-index","title":"\ud83d\udccd AtIndex","description":"Returns the requested element at the absolute position of the array.","sidebar":"tutorialSidebar"},"mvavg-methods/input-output/back":{"id":"mvavg-methods/input-output/back","title":"\u2b05\ufe0f Back","description":"Returns the last element of the array (the oldest element added).","sidebar":"tutorialSidebar"},"mvavg-methods/input-output/front":{"id":"mvavg-methods/input-output/front","title":"\u27a1\ufe0f Front","description":"Returns the first element of the array (the most recent element added).","sidebar":"tutorialSidebar"},"mvavg-methods/input-output/get":{"id":"mvavg-methods/input-output/get","title":"\ud83d\udce4 Get","description":"Returns the current moving average value.","sidebar":"tutorialSidebar"},"mvavg-methods/input-output/get-by-brute":{"id":"mvavg-methods/input-output/get-by-brute","title":"\ud83d\udce4 Get By Brute","description":"Returns the average of the N last added data points requested.","sidebar":"tutorialSidebar"},"mvavg-methods/input-output/operator-index":{"id":"mvavg-methods/input-output/operator-index","title":"\ud83d\udccd Operator[]","description":"Returns the requested element at the relative position of the array (the first index is aways the most recent element added).","sidebar":"tutorialSidebar"},"mvavg-methods/input-output/push":{"id":"mvavg-methods/input-output/push","title":"\ud83d\udce5 Push","description":"Inserts a new element in the internal array and returns a pointer.","sidebar":"tutorialSidebar"},"mvavg-methods/input-output/size":{"id":"mvavg-methods/input-output/size","title":"\ud83d\udccf Size","description":"Returns the size of the array.","sidebar":"tutorialSidebar"},"mvavg-methods/intro":{"id":"mvavg-methods/intro","title":"\ud83d\udce6 Moving Average Methods","description":"The DataTomeMvAvg class abstracts the implementation of a circular array in order to calculate the arithmetic average of its members.","sidebar":"tutorialSidebar"},"mvavg-methods/partials/create-partial":{"id":"mvavg-methods/partials/create-partial","title":"\ud83d\udee0 Create Partial","description":"When you create a Partial, the structure will create a reactive variable behind the scenes. The name reactive represents how the variables will automatically update their values without more instructions.","sidebar":"tutorialSidebar"},"mvavg-methods/partials/get-partial":{"id":"mvavg-methods/partials/get-partial","title":"\ud83d\udce4 Get Partial","description":"Returns the Partial average result of the requested ID.","sidebar":"tutorialSidebar"},"mvavg-methods/partials/intro":{"id":"mvavg-methods/partials/intro","title":"\ud83d\udcca The Partials Concept","description":"The Partials are a more efficient way of calculating the average of one data array partial sizes by avoiding the recalculation of the entire array every time.","sidebar":"tutorialSidebar"}}}')}}]);