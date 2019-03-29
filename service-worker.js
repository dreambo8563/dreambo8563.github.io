/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2015/12/18/An-Overview-of-JavaScript-Promises/index.html","dbf5324fe3447f05496c8ef062ad6aaa"],["2015/12/18/Angular-First-page/index.html","704e255a2e8eb51a9954df0bae1dd78d"],["2015/12/18/Automatic-focus/index.html","dfcebe640917d3267a451b15dde05811"],["2015/12/18/Bind-Method/index.html","dfc9406882304b1e1c11a21c2ea48822"],["2015/12/18/Express-app-get/index.html","5c837ca1a97fa31bafd1c54db803b02e"],["2015/12/18/FE-Grid-参考线/index.html","fe9d0ee358e97d4cc24169ad09ed55e0"],["2015/12/18/Gulp-For-Sass/index.html","9e995485eea8c03d591c19e6fc62fccb"],["2015/12/18/Gulp-Liveload-Nodemon/index.html","dde29abfb98e7093545b8241364a4e64"],["2015/12/18/HTTP-Header-详解/index.html","eaf2e66543ded50dcf056451a95b79f5"],["2015/12/18/How-to-Upgrade-Node-js-via-NPM/index.html","52ff0ef0a6dcdfbf12bf47605d790666"],["2015/12/18/Jquery-Plugin-dotdotdot/index.html","b21753b2ba7a9ea53e4aaaa29dabe193"],["2015/12/18/Node-js-url-parse/index.html","71b91ce0361ae0aa05b1dfa15a2bcc8b"],["2015/12/18/Ready-初认识/index.html","a193fdad9a01b7644570992883486a07"],["2015/12/18/TypeScript-on-Node/index.html","8a3baacccd20e7c2e4aaff5d6c0d6b1c"],["2015/12/18/WinJS-自定义控件-之-GameTag/index.html","d4d28be06984e3186b467c2447c99d91"],["2015/12/18/WinJS-自定义控件之-VItemContainer/index.html","3a638884359826d5b809a924372ff25c"],["2015/12/18/WinJS自定义控件之-MsgBox/index.html","c52f8f696e2a69f691437bf27fd41415"],["2015/12/18/app级全局数据的临时存储/index.html","8a660b28dd86a4cef58580cee865fa3f"],["2015/12/18/backStack-导航历史/index.html","ebabf47da700c8f78d15675e8c9e29d4"],["2015/12/18/console-log/index.html","bc7963cac1cd17f973d19666b1cb1478"],["2015/12/18/fs-readFile-跟踪解读/index.html","63a934566981da2ecff2d0e1a035c307"],["2015/12/18/hello-world/index.html","3c1f20c191c13d3399e2729becd28f03"],["2015/12/18/http-get-解读/index.html","2d49e48230ba1aca89a44b2f15883785"],["2015/12/18/node-开发常用工具/index.html","90254f3dd93dd751ebd43d5c96acce8b"],["2015/12/18/判断是否会-back回来的/index.html","7c76f4f008bbb5a54b457be0db1478e7"],["2015/12/18/跳转间binding-错误/index.html","8d2f3de09865af6fc60481307b771eb5"],["2015/12/23/Angular2-minLenght/index.html","f869b64aff8fba6f244c0543d342d241"],["2015/12/28/Angular2-pipes-sortBy/index.html","3f31b846e31522f0fc4b7e44d138a91e"],["2015/12/28/Rxjs-初体验-with-angular2/index.html","24fe1b67e12ff1683105856e39760166"],["2015/12/29/Angular2-Directive-rotate/index.html","3a766038bfa3d8df529395f1d157656e"],["2015/12/29/Angular2-Simple-Route/index.html","d7721ddaa267531e455b7d9a2f2db770"],["2015/12/29/Angular2-outputs/index.html","4e1ab3cd5ebed2f1f781425d959038a8"],["2016/01/04/Angular2-hook-methods/index.html","7eda587ddf47315b3698152ee612a2b2"],["2016/01/05/Angular2-host/index.html","56b7a5762c6c56c0f303fbe8eb19c5e1"],["2016/01/06/Angular2-ngIf-源码解读/index.html","b0ae285689e21a9112da1656b202eb10"],["2016/01/07/Angular2-复杂指令-ngError/index.html","4407eeba5e9b380814c684522277bba0"],["2016/01/07/快速转换大量String-为DOM/index.html","9aaadd25b79bd8e56b1d86b3b7c14124"],["2016/01/11/Angular2-DynamicComponentLoader-用法/index.html","559cdd89ecb4e986f4a766fbdffafe36"],["2016/01/11/Koa-中间件方式理解/index.html","a70781f3e14b8eeabbaa600c7cad0c1e"],["2016/01/19/Angular2-Directive-CheckboxControlValueAccessor/index.html","e9bc9ab8be269557570cb25526fd83e9"],["2016/01/19/Angular2-Directive-DefaultValueAccessor/index.html","fadd02ebdaa2f9ca4ba6d25fe231562e"],["2016/01/19/Angular2-Directive-NgClass/index.html","da847bece300675841e4dfc95422390b"],["2016/01/19/Angular2-Directive-SelectControlValueAccessor/index.html","f6a46da03f14490221a4ef0c4fe1e1df"],["2016/01/19/Angular2-Directive-validators/index.html","ceec43e554d208fcf085f1dfb28d048f"],["2016/01/22/Angular2-Class-DirectiveMetadata/index.html","86bc1ce5850f638b437e3cd6cff0f782"],["2016/01/22/Angular2-Directive-NgControlGroup/index.html","7e9ee52dbe1cb17da5caf4cceaabbb4e"],["2016/01/22/Angular2-Directive-NgControlNames/index.html","bc98bb4ec357fecc726a886ee10464d8"],["2016/01/22/Angular2-Directive-RouterLink/index.html","175d0d99071d410b25e1494d1d19c6e8"],["2016/01/25/Angular2-Decorator-Component/index.html","08b5bdb0514be0802d9601bfc0a7f906"],["2016/01/25/Angular2-Directive-RouterOutlet/index.html","fb9a9a183edee5e10e340b2a6554523e"],["2016/01/26/Angular2-Class-AttributeMetadata/index.html","c54cdadf7f436295d1b87056070a1b92"],["2016/01/26/Angular2-Class-DirectiveResolver/index.html","bbc731a249f7a2c8dd81eb80c7be43fe"],["2016/01/26/Angular2-Class-UrlResolver/index.html","bc8f23a8a74840478f40725f0df12a5c"],["2016/01/26/Angular2-Class-XHR/index.html","0aa48a0ea880b2cada99249cf1ebf690"],["2016/01/27/Angular2-Class-AppViewManager_EmbeddedViewRef/index.html","0325731f93979a6c830084f12429cd00"],["2016/01/27/Angular2-Class-ElementRef/index.html","a45552ed5abc9002b6c69a0208fb5630"],["2016/01/28/Angular2-Class-EventEmitter/index.html","e051502900161c000133db6cd4e989ac"],["2016/01/28/Angular2-Class-HostBindingMetadata_HostListenerMetadata/index.html","4c717a268ef09b47e0c74384a63ba085"],["2016/01/28/Angular2-Class-InjectMetadata/index.html","b24082c51af8a3b9a3ab17787b075960"],["2016/01/29/Angular2-Class-AsyncRoute/index.html","e5c8a7d1444e340c1f2ff144aedf586a"],["2016/01/29/Angular2-Class-LocationStrategy/index.html","2ff5f3c7bbf4d943b56f8be26d5a84a2"],["2016/01/29/Angular2-Class-NgZone/index.html","62852a62a862aedc2ed64cad05660773"],["2016/01/29/Angular2-Class-Request/index.html","67fc614b041ba3aaa74c612925d0fc10"],["2016/02/03/How-to-Make-body-100-Height/index.html","363a33e7851d582afa8414b3d84dd31a"],["2016/02/03/如何关联本地文件到github仓库/index.html","c4013df2e2a25ea640f736153037a786"],["2016/02/05/Singer-Page/index.html","75a35fac17a8022813149a26e63cffd0"],["2016/02/06/Angular2-Components-articleItem/index.html","10d70c7e73d43cffe92d5808699f86ce"],["2016/02/15/Angular2-Components-shadedProgressBars/index.html","d8dfcd195c454fc87d0f6c65d5a940a0"],["2016/02/16/Angular2-Components-inputEffects/index.html","84c0558220cfd16db288de05cbc827f2"],["2016/02/17/CSS3-Pushing-the-Limits-Advanced-Selectors/index.html","b0b2a032a602606216c57eb2975f365a"],["2016/02/17/CSS3-Pushing-the-Limits-New-Tools-for-Text/index.html","e6b472455975a7ea8c04723f64938eec"],["2016/02/18/CSS3-Pushing-the-Limits-New-Tools-for-Backgrounds-and-Borders/index.html","7d12bf09718826760a603bc10522763a"],["2016/02/19/CSS3-Pushing-the-Limits-CSS3-Filters/index.html","9bd29b57bc920b03ff706e0a179cc0e6"],["2016/02/19/CSS3-Pushing-the-Limits-Introducing-CSS3-2D-Transforms/index.html","f978ca2178cbc2ab530fdf205347a50d"],["2016/02/22/CSS-Float/index.html","b79b72b0ded18f86ad6e3329a31ffd23"],["2016/02/22/CSS3-Pushing-the-Limits-A-New-Dimension-with-3D-Transforms/index.html","bd65abd9a64616b2b8bade8fb6283660"],["2016/02/22/CSS3-Pushing-the-Limits-Bring-2D-Transforms-to-Life-with-Transitions/index.html","3504d63e8627768ce2b85b131fc9bd49"],["2016/02/22/CSS3-Pushing-the-Limits-Creating-a-Multicolumn-Layout/index.html","720cf36988a25ce12d6335b0ab7299c0"],["2016/02/22/CSS3-Pushing-the-Limits-Flexible-Box-Layout/index.html","59bcb0938ee0254f70570ff872f83ed3"],["2016/02/22/CSS3-Pushing-the-Limits-Getting-Animated/index.html","c9862d6b4565b04ac01e300848cb6fad"],["2016/02/22/CSS3-Pushing-the-Limits-Getting-Creative-with-Pseudo-elements/index.html","a53c2cbf072bc74720a93d773d8da542"],["2016/02/25/How-to-use-html-as-the-template-with-Node/index.html","16faab852252cefc17228051dde3f55d"],["2016/02/25/MongoDB-Read-Operations/index.html","beeb7f88abb55783ae6ea70f4e643e11"],["2016/02/25/MongoDB-Write-Operations/index.html","ab968d34fdabed9672c55116a372f8ff"],["2016/03/11/CORS-node-js/index.html","4fd3a1d1e47256aea2b8e7075184f97e"],["2016/03/16/RxJS-Creating-Observables/index.html","7ad06b54cafa7de9ff1ca25dbb75c8d0"],["2016/03/16/RxJS-基本概念/index.html","8f931e7ed5d085274a45de9ce804237b"],["2016/03/21/RxJS-请求数据更新流实例/index.html","990e2b99c68646e7b6b49800ff083372"],["2016/03/25/Rxjs-重构/index.html","a06100773ad84c83682d72e5bce4b3a2"],["2016/03/28/JSPM-TypeScript-React/index.html","3fa2e44eb8e16222bd106d1b4539e02d"],["2016/03/28/React-React版的-ngFor/index.html","7494d01354035ed91f5f53861607d16b"],["2016/03/28/React-The-First-Try/index.html","736d8d2186d1a226617080e8eee65082"],["2016/03/29/How-JavaScript-Event-Delegation-Works/index.html","bfc1f726f2c97fc4748f31c434cbe617"],["2016/03/29/React-State-状态管理/index.html","9dcc41ca36bd50533394e75fca0eb180"],["2016/03/29/React-简单的状态传递和事件处理/index.html","dbbdd3878f94139cc88254d2ad688a98"],["2016/03/29/React-组建Namespace/index.html","4e5a4583fd89241a9c932a6849af2884"],["2016/03/31/NativeScript-经典view-model解析/index.html","c1f149115ec6ff782daf137eec0fa2e4"],["2016/04/06/NativeScript-App-LifeCycle/index.html","eb2dff84b7df4293610ef1fdd8b059df"],["2016/04/07/NativeScript-TabView/index.html","af6406b1137dc579ce0e7d259ce98796"],["2016/04/11/NativeScript-Button/index.html","f399c9124f882305b20f8719ced2d9dc"],["2016/04/11/NativeScript-Label/index.html","89134127300ffd07b1957caa888cf437"],["2016/04/12/NativeScript-TextField/index.html","9162e19833d45f32d3b42f6a6dfc5733"],["2016/04/13/NativeScript-SearchBar/index.html","294ce3a7154ccf84b1eecefedb031227"],["2016/04/13/NativeScript-Switch/index.html","e2a70df2651ce1c29d41925e72c853af"],["2016/04/15/NativeScript-ActivityIndicator/index.html","a52af38146b4892d8dd6bf36b73838d2"],["2016/04/15/NativeScript-Progress/index.html","c8d2e1be113bf08ce8d564899775fe95"],["2016/04/19/NativeScript-Image/index.html","8bbc1348d3ab907472b62d39947e244e"],["2016/04/19/NativeScript-ListPicker/index.html","b515ea2cfcd0e699ec3a6b05f4f7cdc6"],["2016/04/19/NativeScript-SegmentedBar/index.html","2abfbf033f654e32fe6cdbd983cffc7d"],["2016/04/19/NativeScript-TimePicker-DatePicker/index.html","d62dbe50535a66b5f505f825578d4617"],["2016/04/25/Angular2-DCL-inputs-outputs/index.html","da9bd624ac2a19bd653e2a16d45487da"],["2016/04/27/Redux-TodoList/index.html","0e762f55c9f1fd3ea3a7bf5c95a07dfd"],["2016/04/28/Redux-compose源码解析/index.html","b12c0c625e4563525966a19e8900b022"],["2016/04/28/Redux-createStore源码解析/index.html","cd6173820cfc814c5e9f85bd26bad055"],["2016/04/29/Redux-applyMiddleware源码解析/index.html","f0c943d1646be108542ea4400131a3b4"],["2016/04/29/Redux-combineReducers源码解析/index.html","7438d41070cde06acdcdd88dc89c24c6"],["2016/05/03/React-Router-Configuration/index.html","7ac26993c49fe2df021c41879bbac506"],["2016/05/03/React-Router-Introduction/index.html","0b0d1a040dc4c5e8eda473e115563a51"],["2016/05/04/React-Router-Dynamic-Routing/index.html","95b7f2fa2ad0a514affef9a94e11e80a"],["2016/05/04/React-Router-Histories/index.html","d6244209776a857ecea03eb0c0e896d1"],["2016/05/04/React-Router-Index-Routes-and-Index-Links/index.html","fc52a93b3d75af2bcc24a28e4762753e"],["2016/05/04/React-Router-Route-Matching/index.html","7e434772fccb1e48c64dae93418257f0"],["2016/05/12/Rxjs-Operators-Count/index.html","b4e2c9a794da39cb2ed21910c7480b41"],["2016/05/12/Rxjs-ngPagination/index.html","326d7b71139dd71ab976d58c1debf05a"],["2016/05/16/Rxjs-Operators-First/index.html","56b417c01d28c3979cc470a1c2177979"],["2016/05/16/Rxjs-Operators-If/index.html","d806387c10aa36455510fb8ce9669a7a"],["2016/05/16/Rxjs-Operators-Last/index.html","e36ef002bfc88a649c02b8e35f2ff69c"],["2016/05/16/Rxjs-Operators-Partition/index.html","7db1136bf7e2e02c40596005d50147b0"],["2016/05/16/Rxjs-Operators-StartWith/index.html","a496343cd2f6d31eb076e65189b1ddb1"],["2016/05/17/Angular2-ComponentResolver/index.html","7b62a7a01bf2c0907764764bb09280bb"],["2016/05/17/Rxjs-Operators-CombineAll/index.html","010a027afdc46fe09eeafd792508efb5"],["2016/05/17/Rxjs-Operators-CombineLatest/index.html","c400e859b17736d22fe9e1e747bfbf74"],["2016/05/17/Rxjs-Operators-Concat/index.html","67f1bc56649ee95a85c5d3407a47ca02"],["2016/05/17/Rxjs-Operators-FindIndex/index.html","21aa7c31a4560a5f969d99e2e7a5a740"],["2016/05/17/Rxjs-Operators-Switch/index.html","bdde7627591c85bd641ab5c74dabf364"],["2016/05/17/Rxjs-Operators-SwitchMap/index.html","62ff6c3a1bd5b9ec1decb8ce957a49ab"],["2016/05/17/Rxjs-Operators-TakeLast/index.html","0dad832920435d0d04cc382eb20d18aa"],["2016/05/18/Rxjs-Operators-ConcatAll/index.html","fd5c70e0c85f61fbb7f0faa7905dace7"],["2016/05/18/Rxjs-Operators-ConcatMap/index.html","e2d9d8e41a784a5a2252047e6206ed1b"],["2016/05/18/Rxjs-Operators-Defer/index.html","939318bd8775d4769c8c50645c978465"],["2016/05/18/Rxjs-Operators-Delay/index.html","591c1c3be2c0acf02b57aa7bc2eabfff"],["2016/05/18/Rxjs-Operators-DelayWhen/index.html","eec2129f222904d96a5530958a4521cf"],["2016/05/18/Rxjs-Operators-MergeAll/index.html","9c0197969830eb87967767415a8aa63f"],["2016/05/18/Rxjs-Operators-MergeMap/index.html","cb55d176f60d310b336198ac4cdffd71"],["2016/05/19/Rxjs-Observable-Cold-To-Hot/index.html","b045bd95dcbbc29a65008159301863fb"],["2016/05/19/Rxjs-Operators-Reduce/index.html","60cf9a1d5a1701f11d3323aa3ef74a2d"],["2016/05/19/Rxjs-Operators-Scan/index.html","7001f91169af16589f4f75c32991d195"],["2016/05/26/Rxjs-Operators-WithLatestFrom/index.html","ccc322b18f86dc25eb9dfc0af2968354"],["2016/05/31/Angular2-ionic2-First/index.html","b8baf8347897cf761468e099dcf1fc52"],["2016/06/14/Rxjs-Operators-forEach/index.html","6633ef0ff9970c5fac00892596b56698"],["2016/06/16/循环事件注册/index.html","a53d268dc2978040d8cfdbe33abcc756"],["2016/07/08/JS-modules/index.html","008fddfd01253d6e7d8ebe277a6995a5"],["2016/07/08/Responsive-Embeds/index.html","e840ddae1314cde58596ba0541724c5e"],["2016/08/10/SCSS-Helper/index.html","12e8d7f3cd014a54f15a951224f3f05f"],["2016/08/26/Almost-complete-guide-to-flexbox-without-flexbox/index.html","888abdbea37a7d822e1358e110d821be"],["2016/08/26/Cmder_Git/index.html","c93f0a48dddc766949c49c83e0f060d2"],["2016/08/26/github-免输入密码/index.html","01da98f95358d21341395c7de5f2ce29"],["2016/09/20/从boilerplate中学到的redux里replaceReducer的按需使用/index.html","884c902e90d3d3eed033118d9b4067fe"],["2016/09/20/浅谈RSK-Mobx-SSR整个改进过程/index.html","214e31a73f10c75591f00fc2b0b4a568"],["2016/11/17/RabbitMQ初体验/index.html","84370fb4bb0f0ad42f603a70b3f01007"],["2016/11/18/basic-redis/index.html","32293a95a69682174cf71e81c413b720"],["2017/02/19/akka_stream_Mat/index.html","1a0eadf7c73d81298981d9a6a68f9267"],["2017/02/19/akka_stream_basic/index.html","c81b4c05c6a27c8f4ec2f927d9b718ae"],["2017/02/19/play_http_ ActionFunction/index.html","9cb7423b0479ddc8d7f25685e8137b7d"],["2017/02/19/scala/index.html","d6e326043fe927ba2348d220acf23237"],["2017/02/19/scala_Option_collect/index.html","9b0a87ad498aa6d2f79b0af4bcc5bba7"],["2017/02/19/scala_curry/index.html","d33bf8823e56d02d88b4d88282506502"],["2017/02/19/scala_pattern_match_@/index.html","49d8ed9f08506139f12206fa8d4e6c63"],["2017/02/19/scala_seq/index.html","229dc161d7ed3bfe2630d87c08ffe564"],["2017/03/12/第一个npm包/index.html","1e20730a1172b204f0c7a84ff32eb465"],["2017/03/14/how-to-install-postgres-on-Mac/index.html","6415991eec44e64a118b0e373f1b4b90"],["2017/03/18/Success-vs-Success/index.html","f508f5db00b238fa2ff9ffe46b4ce389"],["2017/03/22/first-try-with-slick/index.html","58206d97aa817df5397b18e8a90415eb"],["2017/03/23/git-remote-branch-删除有依然可见/index.html","521bce03cd39b6a6f0ac85de9a43ea10"],["2017/03/28/slick-条件插入/index.html","1f7ffcfcc541ddbe8939136599ef204b"],["2017/03/28/slick-返回值包含多个相关数据/index.html","4000ef97ac36c8b496c8c77d892d3cf0"],["2017/03/29/Akka-打包部署/index.html","338a93677756413064a6d6e153440927"],["2017/04/01/重新思考react-返璞归真/index.html","71b9779fa8e191363c852939886a00c1"],["2017/04/12/RN-Navigator/index.html","770a06df8183d6e812a4415443082574"],["2017/04/18/RN-router-flux/index.html","8d7f10cf7c3cd3940d98ea7eed4a1253"],["2017/04/20/SW初探/index.html","8cc5e5dde40e7684f50b2fa131515ed2"],["2017/04/27/Actor-Actor-API/index.html","a52d67171dbaa75ab32706f1e6feccd0"],["2017/04/27/Actor-Creating-Actors/index.html","65ca67fdb580a628351f2d09ee6cac01"],["2017/04/28/Actor-Send-Messages/index.html","feae0e5578da8bfe2d34a7363a5832b7"],["2017/05/02/Actor-Become-Unbecome/index.html","e94b85c1e230a26affc3f22293af38bc"],["2017/05/02/Actor-Receive-timeout/index.html","bb3a1d14836f5f075ac772596780cdd7"],["2017/05/02/Actor-Stopping-actors/index.html","56e072428440a53b80f9c945ac175fd5"],["2017/05/03/Fault-Tolerance/index.html","b63a1ec85b9459e45e956e55e7300683"],["2017/05/08/Nginx-部署SPA/index.html","ed6581d47d57303ced6f1392f457cd38"],["2017/05/10/Actor-Routing/index.html","2df87a0aa5091352baf5afa8a7b7182f"],["2017/05/11/Actor-FSM/index.html","a98393b5adb433ac7900e31ef55366dd"],["2017/06/12/Functor-定义/index.html","2fcf59ce06f384498ff2fea7c70b8f0f"],["2017/07/28/docker-compose-nodejs个人开发环境/index.html","2135255ce0b54ac48ad6d68cf400f6ca"],["2017/07/28/docker-nodejs/index.html","f7dfb040dba5646a65c41c65346f7602"],["2017/09/05/Nginx-proxy/index.html","efb5dce6114531b736e32fce10955f7f"],["2017/11/07/golang-ls/index.html","d7662a7d1b0ef7ae751ce41b4aaf336e"],["2017/11/08/golang-ssh-tool/index.html","e6d156d50ed6d314042ecb18152668c5"],["2017/11/09/golang-simple-JWT/index.html","aead68cae5fcf3d2f939087322ef117f"],["2017/11/13/golang-youdao-dict/index.html","ffa8ed0fc738b0b82db128ae0969690b"],["2017/11/20/golang-Counting-Duplicates/index.html","8c8b87c735155dafb5a077e0332b4585"],["2017/11/20/golang-grpc/index.html","35b59d0b98b952ad9c17b956837b26d9"],["2017/11/21/Algorithm-希尔排序/index.html","a45bb4ece0063219872d3f7946b091bf"],["2017/11/21/Algorithm-插入排序/index.html","8f24911175cf59bdeb56ecf33bbd10e4"],["2017/11/21/Algorithm-选择排序/index.html","a9f5f714d0ceea9d069c7320f2066e45"],["2017/11/22/Algorithm-无序链表/index.html","77fe633bf8965c56d14e01c367c3fdc4"],["2017/11/23/Algorithm-二分查找/index.html","ca5971eb4622e4619eebc2094af4d599"],["2017/11/24/Algorithm-使用深度优先搜索查找图中的路径/index.html","4f2f0f93742fd86747090a001ddc9bff"],["2017/11/24/reflexgrid-任性的flexbox布局方案/index.html","a40dd91e456c1460d3c3a7f2f5f8118e"],["2017/11/24/字体抽取工具-Fontmin/index.html","1f118ce2fb3ec869289e0426fc6bf6bf"],["2017/12/20/golang-gin-demo解析/index.html","1d5adfa0f68963d553bd9d52aebacb17"],["2017/12/25/不一样的拥抱变化/index.html","10159358bb10a7e50d6232b2b36bcd97"],["2018/03/08/NodeJS-分层思考/index.html","ad3f4bf568c9bdd818cf4ac6a403f685"],["2018/03/23/golang-fileExists/index.html","7310098484a7c4c41557abf4674a25d3"],["2018/04/24/elementUI-组件解读/index.html","cfe3a368da90eaaa5fef220cb6b59d42"],["2018/05/10/ElasticSearch-create-index/index.html","f5eba038b47f386c740b7bd294add8d7"],["2018/05/10/Element-mixin-emitter/index.html","6c2af0d50793ec007e8c78e48cab1214"],["2018/05/20/golang-base64简单解读/index.html","9910ac99a7dc4794098a85d9291e2aa7"],["2018/05/23/vue-自制bus/index.html","2fc6bb1bc27d7b133ad566bad1a8441c"],["2018/05/25/golang-websocket-AcceptKey计算/index.html","e3db37c900f949c123b9b52bb7e7de63"],["2018/05/29/ElasticSearch-初试Query-DSL/index.html","282e070ae054aac146f06fcc19e6e3d6"],["2018/06/15/WebRTC视频聊天/index.html","70a79ceb9e60b762f550bd2eb01102bf"],["2018/06/15/微信小程序/index.html","606c25510fa5fa10b2904ee0f8c2f2c0"],["2018/06/21/axios和ios9那点破事/index.html","23b7e36929604fc1a26962acb709a842"],["2018/06/28/golang-goroutine-pool源码解读/index.html","4604bdc5f9bc3f9d6c288f8413b369d6"],["2018/07/06/Element-OSS-upload/index.html","252cc2d626c3f288f1d99cc17978ad50"],["2018/07/09/golang-nats/index.html","b6d7c502481df01652435e3148fb4a07"],["2018/07/10/Three-3D文字/index.html","d4790c2897d405c0d8213f99b332bbac"],["2018/07/13/Jenkins-FE-CI-CD/index.html","ae94913a8776e136d1c2a30cd9a2198a"],["2018/07/19/Jest-VUE-UT/index.html","81676d177fa2f62f1e7c6ba39c41ef77"],["2018/07/23/重复代码扫码-JSCPD/index.html","54d050db4e3b29add14034f217857d0e"],["2018/07/25/圈复杂度衡量/index.html","28dd6330a76fb28700bab1cec7072b10"],["2018/08/07/Newton-s-method/index.html","5fb143bf5a44bca714fdbf6ea21c2664"],["2018/08/08/golang-compare-struct-slice-map/index.html","add3f06156f28d6ee3a73f5c46f1168b"],["2018/08/15/Docker-Sentry/index.html","c3511cfdf275ceb39f9074848ec9ab44"],["2018/08/17/Sentry-node-express/index.html","b0d7308c4c83447906e0329c27adc84b"],["2018/08/28/前端质量思考/index.html","415b5a45147b074ff3fc5ea3a030e667"],["2018/08/30/VSC-TAL-FE-ElementUI-Snippets/index.html","da18ddfec4cb3a57f3b65568d6379fb4"],["2018/08/30/VSC-TAL-FE-Helper/index.html","048f93bb777edeb86313070e4d36cb13"],["2018/09/04/Docker-SonarQube搭建/index.html","78109b51d5e93fa3ea7647e6ec8be70a"],["2018/09/11/golang-uuidv4/index.html","166bd5457dcf443d9ef52ee19c6265e4"],["2018/09/12/golang-uuidv1/index.html","6a1fd6cf8555e51c38249e9d8709899e"],["2018/09/14/Etcd-分布式配置中心/index.html","bbfd27ce617141cf3cf4af76d7483583"],["2018/09/18/Etcd-分布式配置中心2-runtime切换配置/index.html","0e590aed9ae3bee88eee69883def77f4"],["2018/09/25/CSS-Collections-Buttons-1/index.html","7e303bc1a7f13c1d965e1202f10eb217"],["2018/09/25/CSS-Collections-Buttons-2/index.html","b1485ab58738bfa55441d23f746712e0"],["2018/09/26/CSS-Collections-Buttons-3/index.html","d8f99e0fb11c47e83763737d7f139d77"],["2018/09/26/CSS-Collections-Buttons-4/index.html","d4fc2fa0e06c6ad1de0fc4dc9a735ed3"],["2018/10/10/关于opener的安全小技巧/index.html","e0d2897cc5c96a5e089ddf23da4a4b0c"],["2018/10/30/前端独立部署-最小docker化实践/index.html","ede16042b40ead90d2438a00ebdc6f0f"],["2018/12/05/golang-Trace链路跟踪实践/index.html","45e6abaf0f41864dbdb4723b395370ec"],["2018/12/12/golang-grpc-Client-BL/index.html","13c276b45c9fefec3c60df42b25ce322"],["2018/12/18/Makefile简单脚本应用/index.html","f5eab7698748271681be2a0fde1009bb"],["2018/12/29/2018年度总结/index.html","2b405ac5e906585eec6269be96429b6f"],["2019/01/18/Element-偷偷引用内部方法/index.html","a3b731102dc41e0c11832adc1e46b9b0"],["2019/01/22/玩耍github/index.html","f27ea80bb275675e2e3bd291a6259326"],["2019/03/12/Vue-vue-device-detector/index.html","421c9920ef52fb668bd07fdc2c15c49b"],["2019/03/12/Vue-vue-storage-watcher/index.html","f2f1529205411c1951812082e64f6e7e"],["2019/03/19/Vue-vue-lazy-calc/index.html","a9226d2ad4891417d8eb5079e5e2e3c6"],["VEN/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["VEN/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["VEN/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["VEN/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["VEN/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["VEN/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["VEN/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["VEN/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["VEN/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["VEN/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["VEN/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["VEN/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["VEN/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["VEN/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["VEN/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["VEN/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["VEN/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["VEN/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["VEN/font-awesome/css/font-awesome.css","8e12157da5fc90094ae4113ba110456b"],["VEN/font-awesome/css/font-awesome.min.css","0831cba6a670e405168b84aa20798347"],["VEN/font-awesome/fonts/fontawesome-webfont.eot","45c73723862c6fc5eb3d6961db2d71fb"],["VEN/font-awesome/fonts/fontawesome-webfont.svg","76a4f23c6be74fd309e0d0fd2c27a5de"],["VEN/font-awesome/fonts/fontawesome-webfont.ttf","7c87870ab40d63cfb8870c1f183f9939"],["VEN/font-awesome/fonts/fontawesome-webfont.woff","dfb02f8f6d0cedc009ee5887cc68f1f3"],["VEN/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["VEN/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["VEN/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["VEN/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["VEN/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["VEN/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["VEN/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["VEN/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["VEN/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["VEN/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["VEN/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["about/index.html","2bc9c28781c852b4aea01ded796d735a"],["archives/2015/12/index.html","471a730d60ceb28324f8dd7b691947af"],["archives/2015/index.html","b64418f4bbae845a7bceb999e205d430"],["archives/2016/01/index.html","0dd60f7c0683ff7ffe9efdeea950d08e"],["archives/2016/02/index.html","59025a2cd0953c0e94854eeeb3f557a2"],["archives/2016/03/index.html","0fc0a4d4cdd38348d4748564db91eebc"],["archives/2016/04/index.html","ce2cc8cc8a0c0c9cdaaa89d4d0d099a5"],["archives/2016/05/index.html","3eb21bd8c0488eca5bee4fc9d1bf91d3"],["archives/2016/06/index.html","3d107f674f553913323b35abb114245d"],["archives/2016/07/index.html","1cf4156882c661bc3f59918105ed6c52"],["archives/2016/08/index.html","026b41c0529caf8cd2457a9bbbf83374"],["archives/2016/09/index.html","ae86b09dc6ebbeb07bc78eec0010af26"],["archives/2016/11/index.html","660e9f936e5319fb79fdd99115e63df1"],["archives/2016/index.html","1b0407fdd84c6ae3ebc084b062805f73"],["archives/2017/02/index.html","55e682ef2e41e823af78bd87faaae23a"],["archives/2017/03/index.html","c892f61f5b2d4ed4f52cc8a72c470f7f"],["archives/2017/04/index.html","ca16c273f58c271ec8ea7768b4ddc600"],["archives/2017/05/index.html","2d026c3496ab4c0479e6acd758524652"],["archives/2017/06/index.html","fd76a1acc29855bf2af271c54fe84fdb"],["archives/2017/07/index.html","a1478a391a2cbf649989e137b1e46724"],["archives/2017/09/index.html","2e9b9456c8209c6d0e8fcd52af02e919"],["archives/2017/11/index.html","b8ee0bd43da686703bf51071a32df225"],["archives/2017/12/index.html","37047a3e5707784788b65098db2340e5"],["archives/2017/index.html","202d9bc52f038f570c36bfa473d5c569"],["archives/2018/03/index.html","44fe4613b0a1f123eccdd287de0661db"],["archives/2018/04/index.html","d21264c3c1718861c2f9420d39a39794"],["archives/2018/05/index.html","dd9c4b860e787e2b56c9f3f7c1454e1d"],["archives/2018/06/index.html","9d04de76d435703093f28e36205ea3ec"],["archives/2018/07/index.html","1372f82c9d47f1b9cee93ee5c696d19f"],["archives/2018/08/index.html","e18d937e463af222422b4e371984dbfe"],["archives/2018/09/index.html","f323ef8d2526797520957e1c4a91bba6"],["archives/2018/10/index.html","1f1e497cffd05b9203ec400f71aabd94"],["archives/2018/12/index.html","ad800ed920d4c7d36fc236fbd221b229"],["archives/2018/index.html","52bb290672c080b3af163a70a3c592c3"],["archives/2019/01/index.html","4c1e8ed5605fcbc22d2c6c9d5ef52037"],["archives/2019/03/index.html","00ad027959e6aec2ad74a5d69607d26c"],["archives/2019/index.html","769a8cfc672567b48fc83e88d20269d4"],["archives/index.html","0114f3b7156589f73cf102b2ddabb318"],["categories/Algorithm/index.html","090c17505f7ee12ea9f038bb2f98a638"],["categories/Angular2/Ionic2/index.html","7dfd7057a0d36b4ca35306fe3246ebba"],["categories/Angular2/index.html","b0dcce6a15fc4520685b4271c9d7f94c"],["categories/Angular2/page/2/index.html","bc02da179937a5a068c001628c15c352"],["categories/Angular2/page/3/index.html","93d630ff2e7ff0204437bdc77a768997"],["categories/Angular2/page/4/index.html","aaafb2e23aa08ce673b2686338091bb4"],["categories/CSS/index.html","2916300622483321fad2473236ca4d6c"],["categories/CSS/page/2/index.html","36bc5e6289993497ae07a059ad54320c"],["categories/CSS/page/3/index.html","1c6f07486c07f57b716921c35a4a4285"],["categories/Docker/index.html","88bd6a9c0b274a07b20ff0f01449c1f3"],["categories/ElasticSearch/index.html","760a0c15a62d4a1d2b49578b3510be86"],["categories/Golang/index.html","6b6353350a51eb75b59424b9982d2e69"],["categories/Golang/page/2/index.html","0e4f048a63607ee7e53cf00849d876ae"],["categories/Golang/分布式/index.html","b0b34bcd2a56c6b92c9d1c21673ce966"],["categories/HTTP/index.html","e1fbe109c1ad37ba58d9a40274a65f9d"],["categories/JS/WinJS/index.html","a131bfb40d7dba77285c95f9c0a31c99"],["categories/JS/index.html","64d84c3543714a5fc66f4f5693a8444e"],["categories/JS/page/2/index.html","d7b125c564e6f70cca295847247ffb3d"],["categories/Jenkins/index.html","01bb019d8afa19049dd361889da31a83"],["categories/MongoDB/index.html","e0687c24874c7d2b951b28a946fde315"],["categories/NativeScript/index.html","166f731619372fcec21f37a9438fa3e8"],["categories/NativeScript/page/2/index.html","00d5112be99f1660fed11478ada5d04c"],["categories/Nginx/index.html","7d0b4e1bd77d72153d074549a6073104"],["categories/Node/index.html","1a5326067b50a17f76189ac23da7fb8a"],["categories/Node/page/2/index.html","9ec0c1309317b3aa8ac0e1b5284bf89a"],["categories/PM/index.html","30702810384b4e9dae67eedddf09133f"],["categories/React/React-Native/index.html","a8b46619821d6c5288640dd2beece3c6"],["categories/React/React-Router/index.html","997853052639e9e336fe8c516766760e"],["categories/React/Redux/index.html","e12ee06052d9d617292038b39a05b5b1"],["categories/React/index.html","1ed38ce19c921748420631ba808c4e5a"],["categories/React/page/2/index.html","99545dcaf6dca388ccc9505b29cabddb"],["categories/React/page/3/index.html","628e0f2f34a97deabff80a3b7e87b331"],["categories/RxJS/index.html","1f80a6577452b4cc74b03c6febb1e729"],["categories/RxJS/page/2/index.html","f21ac461e2415fc760d82e7cd2830de6"],["categories/RxJS/page/3/index.html","7aa4d18274cfc8e9a2b3e394f3be63f1"],["categories/Scala/Akka/index.html","f6e29f64d9dc708f94cc280939600776"],["categories/Scala/Akka/page/2/index.html","1b60c3eb071d3580aeceb836369597d5"],["categories/Scala/Play/index.html","de9389666bbbb9467252f5ba31ed0c26"],["categories/Scala/Slick/index.html","81f2b9e2f372b0f17b101e6a8e04d566"],["categories/Scala/index.html","99044dfae8ce94b52c638b427d0c67cd"],["categories/Scala/page/2/index.html","7aa7ea135ce4f3ae1a7fc8375c03034d"],["categories/Scala/page/3/index.html","ca742f213f7c8d0a8b8cd4bdbdbbaaed"],["categories/Shell/index.html","06eb6cb462d86d370e5984a0498da714"],["categories/Thinking/index.html","d1132a349a4e0ab67bd013ea90d4bc4a"],["categories/Threejs/index.html","2775144828e61e4384ae8700aa3d5c37"],["categories/Tools/index.html","4011fb08ce4497cfd5bf0b6c2516e2b3"],["categories/Tools/page/2/index.html","103e3261f183c1f4be7f2a258b86c4d5"],["categories/TypeScript/index.html","b93471d0c937b07be9f9d86c77e381af"],["categories/axios/iOS/index.html","4329b45b97942e089fec66380a603f59"],["categories/axios/index.html","b42552233293cff46d472a5c5398eb26"],["categories/github/index.html","efb9fddd2a18d7eaf7095a04f6e66321"],["categories/index.html","82416b95c878268d0aa8b5f003f1f5c8"],["categories/vue/index.html","0624a31f62389a53f2a4eaf7c49d2d03"],["categories/web/index.html","4703f836148cc29e1dac518da0a841e8"],["categories/weixin/index.html","2671b468b1a79712dd15d51c705d4f4d"],["css/main.css","e3fcde712ee8daadd38b2cda7a737885"],["images/avatar.png","65b0d841b964e5b8a4a4a971b09b6fa2"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","fc318f5d0e86d4c875cb69a0ef4383f1"],["js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["js/src/bootstrap.js","73c38465c33a6b7d49820f12d4b6cd09"],["js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["js/src/motion.js","5e50cb0717c2be4c43ecd948b3abca59"],["js/src/post-details.js","a64526b288db34b054ebd5f22c061754"],["js/src/schemes/pisces.js","95b6f118d6fdf262f540d3a9144fd79a"],["js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["js/src/utils.js","c9dbca6eabd5a792c0fbac43c7ef96a2"],["page/10/index.html","0a88f3e8e584c222ceabdcb1311098cd"],["page/11/index.html","ef8693eace1f550d308dffd5b5c8bc06"],["page/12/index.html","906f68a03995692b47bd7cd2fa90593d"],["page/13/index.html","35c8c6db1960f09d9eeb6c7db7b92c1b"],["page/14/index.html","3c941bbb9e2e18adda3cad158f55e90c"],["page/15/index.html","9c2265edf57fd6d1e47c52ae549fbfc3"],["page/16/index.html","4dfc93277d037c96c9047d60da0e7fe7"],["page/17/index.html","c68de1dcdceebb3609195a10a9a2dbf7"],["page/18/index.html","42df11013827e75f0969005739263c5e"],["page/19/index.html","b048b4cb55c9fd9ea44095d8b39a8c57"],["page/2/index.html","60ef724a688da8a822b569acfd40d592"],["page/20/index.html","0058aab6aefab8247ef6bcd8e4a4ffb2"],["page/21/index.html","a3146978bbbb96c50b2a631bb879d56f"],["page/22/index.html","8d5c87151befd76455892f9f76db923f"],["page/23/index.html","434bd305f54afad3b9a430c0031d8bd1"],["page/24/index.html","7c0677d490c0fa6d20bf70ce6ac4a4f6"],["page/25/index.html","55603fb1ff475171a97208bbd85b8ea4"],["page/26/index.html","b4f6d0b654a7006015067726d1df069f"],["page/3/index.html","c4904ab63dc5795431ea61fb1cd0d64b"],["page/4/index.html","ac5eed287c9b703eba9c452226165821"],["page/5/index.html","10bdf107bdf85e31352673164698307f"],["page/6/index.html","b703863ac9208e513fa2e9435dc1d9b2"],["page/7/index.html","c844d519f4f036dd95db0e3f45f24a62"],["page/8/index.html","04b89bed76ab64967fc19e61b3112a52"],["page/9/index.html","0f64b5d3a37b967223f4b0b807ee8288"],["tags/Akka/index.html","a9f94b21992746119c88799b269c8a0d"],["tags/Akka/page/2/index.html","6194d78c5d8141b123875b412d9e8339"],["tags/Algorithm/index.html","e81b0fab49dccf0914be5a43e0066b11"],["tags/Angular/index.html","23925d33a80a1f187688c71475ae6685"],["tags/Angular2/index.html","568d559df193c1aeb4ac60bb7fddc338"],["tags/Angular2/page/2/index.html","c269e7d2b996b4869db3796eb220e7fd"],["tags/Angular2/page/3/index.html","1d7e4f8a80f95bda28dc5a06dd1f0c38"],["tags/Angular2/page/4/index.html","b77fd29c2ac27d364864c8cf41b038d4"],["tags/Angular2/page/5/index.html","e50cc1179647cbc7166354c565aaac45"],["tags/Bind/index.html","3dddaf46f83063b8c15bc75be825b903"],["tags/Body/index.html","017f0d18049d06f798c0e9e64e0bcebe"],["tags/Buttons/index.html","e75608e50c8e7eb0720e289f473e22bc"],["tags/CORS-Node/index.html","32128f55dc30fbe2cd6c9458af0872df"],["tags/CSS/index.html","126711ba5ca176203715ee13f4489b04"],["tags/CSS/page/2/index.html","256b981bea29829d3136767bf12d069b"],["tags/CSS3/index.html","2ee05bf447b675296e7bc492d28052f8"],["tags/CSS3/page/2/index.html","cb92859417429b07b2915d3a9e038540"],["tags/Cache/index.html","176688b2850f3266fdcf3eda488e8f92"],["tags/Class/index.html","779b3efceca873d234f22026e5c833a7"],["tags/Class/page/2/index.html","f366c31f1b3e1d386bdaea6877bb191b"],["tags/Componnents/index.html","4250741070ecd0cfd3cc03b58213826f"],["tags/DOM/index.html","d647ca2ea23388bf2b6426d0bb6d4b16"],["tags/Decorator/index.html","0fb013732e31e73f0d5180b3b02b231a"],["tags/Directives/index.html","1d6ee106f4b8b7cfac9863bf9a992acb"],["tags/Directives/page/2/index.html","57905fe82a8c38af1ea135f900edb902"],["tags/Docker/index.html","8793230ea45efd1aacb29d521b963194"],["tags/DynamicComponentLoader/index.html","1d4f5017e3543d34f8dcd77db984f473"],["tags/ElasticSearch/index.html","8615364e033effd0b93ecafdaed7f397"],["tags/Etcd/index.html","ab3b9e6a3259a772e1ee73eaf2bf3ec4"],["tags/Events/index.html","7f6551f5858c4836bc07247fe053cac6"],["tags/FP/index.html","d34a298b0e0680dfbee91db053756c87"],["tags/Focus/index.html","1ccb946f34d20f133dcc0481288bab59"],["tags/Git/index.html","a42728e7dd763cd226452f4b8cfd9252"],["tags/Golang/index.html","77f8266976b3af48371f9355a74da9a4"],["tags/Golang/page/2/index.html","02375752a4ecabd1070acfd65452ce2f"],["tags/Golang/page/3/index.html","220ac6924d8f3e55e4a540075e1bb2cb"],["tags/Gradient/index.html","723def5179f0dca46f6e9e8585a5996c"],["tags/Gulp/index.html","811e97d23d0e594defcdca480a3ee367"],["tags/HTML/index.html","aba5c1eb5cfa30dfb536386bed5b0e1e"],["tags/HTTP/index.html","fc242b7a7b81a101db9cb8afcb4b48cc"],["tags/Host/index.html","5b8715e6f07c4e9864f7251433b078b3"],["tags/Hover/index.html","cc1d9fe39f1e56d4b1c459d2aba46646"],["tags/Ionic2/index.html","5ac48f71ea900460a1a3a9819882b9b4"],["tags/JS/index.html","a8aff27875b9806a05f616a3e39aa87e"],["tags/Jenkins/index.html","75bfa8b0073aed589263d044ae893e45"],["tags/Jest/index.html","42a2f26a3f3f24f366bed4bb0f2fd482"],["tags/Koa/index.html","bb5699e1c88c434e9308f99aacb528a4"],["tags/MQ/index.html","aee96d071cb9cd0cef1726ebe4127f5a"],["tags/Makefile/index.html","82e50675dbab104e3088380c4e175d1d"],["tags/Mobx/index.html","9f0b1e6b3dbaa342906398de5cc2134e"],["tags/MongoDB/index.html","5132e1b962d424c644476b44823cdf6f"],["tags/NPM/index.html","f3bc8d7de338e03c6ee78c2220223cec"],["tags/NativeScript/index.html","fef8e143664512579ec8219c94dbd9a6"],["tags/NativeScript/page/2/index.html","cccff7433869b690124c12151f51a4a3"],["tags/Nats/index.html","5fe699d38313e55c0ecfb8d2302cf750"],["tags/Nginx/index.html","58d96a030d4e412e43823c8c7910d4f4"],["tags/Node-js/index.html","c79422a1b8e44396280a042f318b6ef9"],["tags/Node/index.html","18bb4dfab1b16211945a0035dadaf250"],["tags/Outputs/index.html","7536bbc5ade4eb742e31cdd654383725"],["tags/PM/index.html","13a0708d1879b8579c80ac13d289f243"],["tags/Parser/index.html","9703fb3869f3c27eda90ecbfc8a5dc8f"],["tags/Pipes/index.html","90924bb53b39ea90a06ee8f0ec2a2ed6"],["tags/Play/index.html","22f51d24db90af4dd9351e86669e1369"],["tags/Postgres/index.html","86bf72fa70e1c85f24ee808d47955345"],["tags/Promise/index.html","5785414e993207eed15a18f83dba66dd"],["tags/React-Native/index.html","5fc0f327bbcdd6e40cdaf95d40cba1a1"],["tags/React-Router/index.html","2e887f9d56acdcc8c04a9bd275cb930c"],["tags/React/index.html","985e9fb7950146f801cf9d5696bf2c0b"],["tags/React/page/2/index.html","de7ea966fcf21ac2a0690f27d6a1beda"],["tags/React/page/3/index.html","1c0d95a4bc1daddd0d030c75f8f52694"],["tags/Redis/index.html","17258709ac1265ad018084aab41a9daf"],["tags/Redux/index.html","6405afb4555ca5dc11ba079c97abc0fc"],["tags/Route/index.html","001b7adea530b0d4bed675f78aed3cac"],["tags/RxJS/index.html","ef7e17b7c87ff1441ab71d6d4d513510"],["tags/RxJS/page/2/index.html","d181c6785fee70ec76371b1db4676a65"],["tags/RxJS/page/3/index.html","93fc6b6243d88607002d2c92dfcaa5b3"],["tags/SCSS/index.html","f33ccbbba1fededb3054ce00597f370c"],["tags/SSR/index.html","2741f24cf43c6881db6c7017deb5e60f"],["tags/Sass/index.html","2822ad469600f289ba5928f1d4f0b608"],["tags/Scala/index.html","9b9c3dcac52ddc8ab916493f3b6fe824"],["tags/Scala/page/2/index.html","563048e547783c2c5e15f5d52847d01c"],["tags/Scala/page/3/index.html","0b47ccae2a0a42ee0f17c9ef2e090191"],["tags/Security/index.html","3a39274aed0c2b3a9f407a81c0a7f94d"],["tags/Sentry/index.html","afb22291a91d7c7831867acafe46e46e"],["tags/Shell/index.html","a41c0961927ec149ebe2db20ac798777"],["tags/Slick/index.html","a94e87ad9d649a8f20a52abb8918df57"],["tags/SonarQube/index.html","425bf6ed2ab8bc149c8f090d59c4e290"],["tags/Thinking/index.html","9334cdbaf66c196449891c3ebf4559af"],["tags/Threejs/index.html","ffd82788d2c8d66afd16867b37bbff38"],["tags/Tools/index.html","0ccbd5c79ae5f4d16ab29f4595c7d6a2"],["tags/Tools/page/2/index.html","6ab73a0c6ffbec90f3affe5de663ce12"],["tags/Transition/index.html","da81e30031e007cc6a93a18853688fe8"],["tags/TypeScript/index.html","0d73c8465c3703e909b0450de571c956"],["tags/Underline/index.html","70aa42bfdd212ef7bb53d8c7f6abf111"],["tags/WinJS/index.html","24750983bc3055ffa65783e55da4fd5d"],["tags/axios/index.html","97a5271d1dba3721c4f31b76891f0a3b"],["tags/element/index.html","be35b0cbf24d58c8a9f9a5f4021a5f9b"],["tags/express/index.html","a62b2211370d0e8e0a624740d729ac1d"],["tags/github/index.html","f19c45941aae6afc43a6d6381e8e64b1"],["tags/index.html","e87a241cddd0ffa458950e67f7e28e10"],["tags/jQuery/index.html","a936962701e55fb7b9d64c7e755ee21d"],["tags/vue/index.html","93e7c51654f7968582360cb383a7af08"],["tags/web/index.html","c9a9aba3e68cc3c0cdba93badb8b9c6a"],["tags/websocket/index.html","9d571d8e8b575681672102a44858327e"],["tags/weixin/index.html","766dd1fb8fe91c34b20b0d29ac4e8279"],["tags/分布式/index.html","e5070956b4e7e97c7de7fe8fc63d2047"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







