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

var precacheConfig = [["2015/12/18/An-Overview-of-JavaScript-Promises/index.html","e413b489d6e1ee179cff95fcc38b0a8f"],["2015/12/18/Angular-First-page/index.html","b73b95fa7bb45fdd63ebd131ea55c8be"],["2015/12/18/Automatic-focus/index.html","9f0aad7ca4075de18306b83f871356b6"],["2015/12/18/Bind-Method/index.html","dfa86b5348e9aa9d0b8f0ae2137d8af2"],["2015/12/18/Express-app-get/index.html","ea943fa88a3d557620078b16ee64d654"],["2015/12/18/FE-Grid-参考线/index.html","019a93b8a1f0d1f6d0460c365a097d52"],["2015/12/18/Gulp-For-Sass/index.html","00b553a5d84d5da43e784a3b96bdaaa4"],["2015/12/18/Gulp-Liveload-Nodemon/index.html","8607f20dd28354a9b262bfa6d63d6744"],["2015/12/18/HTTP-Header-详解/index.html","ace29b71cc217a2f19e13d08741afd98"],["2015/12/18/How-to-Upgrade-Node-js-via-NPM/index.html","af383bb42eba74ef21e99b9ce76cb91b"],["2015/12/18/Jquery-Plugin-dotdotdot/index.html","7aa05dfac5f384c9a38d2c062c295148"],["2015/12/18/Node-js-url-parse/index.html","9e1f1c72c7a4343232860919f2457c23"],["2015/12/18/Ready-初认识/index.html","eeb8d9ed07c3ed6bc3c2e9620c0c706f"],["2015/12/18/TypeScript-on-Node/index.html","0dd8b4ba6631fb7ce0bb265a6d4bc955"],["2015/12/18/WinJS-自定义控件-之-GameTag/index.html","47ffd55563188558d0dab7a7cb4f2f8e"],["2015/12/18/WinJS-自定义控件之-VItemContainer/index.html","b4ef4c74829ce4a9ed20f700e61f1405"],["2015/12/18/WinJS自定义控件之-MsgBox/index.html","2a4612a3cc6f0d86d970105bff084068"],["2015/12/18/app级全局数据的临时存储/index.html","171f7b7585c44888272cbd1c92e7a2fd"],["2015/12/18/backStack-导航历史/index.html","0a0e86233fc78dce59aeb6bd2c90a7f9"],["2015/12/18/console-log/index.html","fd1cd4b9018dd3ce13558ab15f8c9d9e"],["2015/12/18/fs-readFile-跟踪解读/index.html","2eceeb3c8c6a550c53238a34a90efa65"],["2015/12/18/hello-world/index.html","388e153bf447c12493dc9758f67fbb13"],["2015/12/18/http-get-解读/index.html","f126aa66b42ee6306eaf22f27eeed9d5"],["2015/12/18/node-开发常用工具/index.html","68eb8e91930243857b7fdc392f5a921f"],["2015/12/18/判断是否会-back回来的/index.html","77c6406d8fe45c58806a1a2312947a7f"],["2015/12/18/跳转间binding-错误/index.html","f7bf9f9cb87d9d2db0f70a0a0f3a8eb8"],["2015/12/23/Angular2-minLenght/index.html","1f0631c2f432fde3b692ef306b45f542"],["2015/12/28/Angular2-pipes-sortBy/index.html","6fae6d3554861ea2054f031321165c60"],["2015/12/28/Rxjs-初体验-with-angular2/index.html","572e48805245597c764ec8707468a91b"],["2015/12/29/Angular2-Directive-rotate/index.html","712eaeb5ee1b5a15a2ec73ec6526ae08"],["2015/12/29/Angular2-Simple-Route/index.html","5f5f4b8f5bde7917b14b5987d6169934"],["2015/12/29/Angular2-outputs/index.html","fb975a6768484687ccaa3224d936444f"],["2016/01/04/Angular2-hook-methods/index.html","873a6572c26deea88dc1d872a20ae1dd"],["2016/01/05/Angular2-host/index.html","d3082df6ac282662032ba0190b7a7ed9"],["2016/01/06/Angular2-ngIf-源码解读/index.html","0f5606a9d27c727e9ecf24720c26a115"],["2016/01/07/Angular2-复杂指令-ngError/index.html","4aa2f13d007e2ce37f96e0ba5332f742"],["2016/01/07/快速转换大量String-为DOM/index.html","de22891c21507c84efd362581ca99d59"],["2016/01/11/Angular2-DynamicComponentLoader-用法/index.html","657820f319a9116b66ff48db50ed1410"],["2016/01/11/Koa-中间件方式理解/index.html","d920486009b4536f5e24e969a26326f8"],["2016/01/19/Angular2-Directive-CheckboxControlValueAccessor/index.html","fba85282b3ffd3174a939846b811fc3a"],["2016/01/19/Angular2-Directive-DefaultValueAccessor/index.html","4fd1c53dd1cc5164ad844c74d8f20a05"],["2016/01/19/Angular2-Directive-NgClass/index.html","d3ae79b4f4b4e49dce349ab9ca9f082b"],["2016/01/19/Angular2-Directive-SelectControlValueAccessor/index.html","0f743540dc764eea171fb9e6042dd64c"],["2016/01/19/Angular2-Directive-validators/index.html","c8879fc9f064520b2f201d5d79ed19a7"],["2016/01/22/Angular2-Class-DirectiveMetadata/index.html","467865f31789e7892f0b0180d38da52f"],["2016/01/22/Angular2-Directive-NgControlGroup/index.html","bdd3abbae51b2cbf56eb2159df738cbc"],["2016/01/22/Angular2-Directive-NgControlNames/index.html","6657b06b0fc10e3fffb7378b150264c8"],["2016/01/22/Angular2-Directive-RouterLink/index.html","3e12ae9854919c4c24274fbfb9a46769"],["2016/01/25/Angular2-Decorator-Component/index.html","55b7bb23c77af4ff42d26674fa37b07a"],["2016/01/25/Angular2-Directive-RouterOutlet/index.html","cfb59ec4085a53e36f229ce84f52600a"],["2016/01/26/Angular2-Class-AttributeMetadata/index.html","c6e462963b64296e2ce7f6c065e9a2d6"],["2016/01/26/Angular2-Class-DirectiveResolver/index.html","2095357a2bbffaa4d2c7c27ecb5cc031"],["2016/01/26/Angular2-Class-UrlResolver/index.html","99eec794c60e9046eb110ae237df0b6f"],["2016/01/26/Angular2-Class-XHR/index.html","4b9e8130c8a2143ca2440e72669a1279"],["2016/01/27/Angular2-Class-AppViewManager_EmbeddedViewRef/index.html","508c1f78061626a44ac4c9549aa7ad52"],["2016/01/27/Angular2-Class-ElementRef/index.html","8f9307085794155aca5db1c71c0eb58e"],["2016/01/28/Angular2-Class-EventEmitter/index.html","da260f71dc0a5bc9b43534ec32b98f4d"],["2016/01/28/Angular2-Class-HostBindingMetadata_HostListenerMetadata/index.html","be56672c334225dd666a91d600b5263a"],["2016/01/28/Angular2-Class-InjectMetadata/index.html","1e95de9deea6fd3eb509331a5227fbe7"],["2016/01/29/Angular2-Class-AsyncRoute/index.html","bfb22b78e331e2638cc19b90ad37ba35"],["2016/01/29/Angular2-Class-LocationStrategy/index.html","2db5e51276be21f7099568810c1fcc38"],["2016/01/29/Angular2-Class-NgZone/index.html","5b3e228a607cbabdc895601468df4639"],["2016/01/29/Angular2-Class-Request/index.html","c3dd8533af4a159360e8998532f20f4a"],["2016/02/03/How-to-Make-body-100-Height/index.html","f360e5c43ddcaddd770772899fd8190e"],["2016/02/03/如何关联本地文件到github仓库/index.html","20ababe24418590650de58cc68df97ee"],["2016/02/05/Singer-Page/index.html","08cbd456bbe91b7502f18e7c292afdf6"],["2016/02/06/Angular2-Components-articleItem/index.html","ab5b2bd7f3b33857bb3b88ba063ec411"],["2016/02/15/Angular2-Components-shadedProgressBars/index.html","e7b0136c5c7b0b3db0655bc838ee3de3"],["2016/02/16/Angular2-Components-inputEffects/index.html","5593bc6bdf2c9cf258962d5fb5215077"],["2016/02/17/CSS3-Pushing-the-Limits-Advanced-Selectors/index.html","a3bb1ced4ea27ae245de1d3fd04d7c07"],["2016/02/17/CSS3-Pushing-the-Limits-New-Tools-for-Text/index.html","e70d5164603600fba43d51fb67280b33"],["2016/02/18/CSS3-Pushing-the-Limits-New-Tools-for-Backgrounds-and-Borders/index.html","9044d02359a2dce3c0d3f4011d765de9"],["2016/02/19/CSS3-Pushing-the-Limits-CSS3-Filters/index.html","f1342c0069c724fd44f2e2673bafda4f"],["2016/02/19/CSS3-Pushing-the-Limits-Introducing-CSS3-2D-Transforms/index.html","0cd6e91bf1350b962d8bd7dcf8be2eab"],["2016/02/22/CSS-Float/index.html","c6d9dc9e0e68e8ecd81d925723a3670a"],["2016/02/22/CSS3-Pushing-the-Limits-A-New-Dimension-with-3D-Transforms/index.html","92030ba8b83127b38be686eff521f185"],["2016/02/22/CSS3-Pushing-the-Limits-Bring-2D-Transforms-to-Life-with-Transitions/index.html","c71566355ca3cdafd903faa2566f5a01"],["2016/02/22/CSS3-Pushing-the-Limits-Creating-a-Multicolumn-Layout/index.html","2f4c90c0eee77c3b089b0cd478d17fd6"],["2016/02/22/CSS3-Pushing-the-Limits-Flexible-Box-Layout/index.html","09ba8c3587a0fa67f69a5708453abad4"],["2016/02/22/CSS3-Pushing-the-Limits-Getting-Animated/index.html","0599a96e9f8982e31271bd204662ce5e"],["2016/02/22/CSS3-Pushing-the-Limits-Getting-Creative-with-Pseudo-elements/index.html","d10868c0fe2a5a62afee703360ec51b9"],["2016/02/25/How-to-use-html-as-the-template-with-Node/index.html","460afb556343a6297a63dc260d972b67"],["2016/02/25/MongoDB-Read-Operations/index.html","bf9fc2bd627b0807ae97484db40c2ae5"],["2016/02/25/MongoDB-Write-Operations/index.html","efd0dfd07405efd96290e1df2f4174b3"],["2016/03/11/CORS-node-js/index.html","56136981872e515dfe43c53f6048cc8b"],["2016/03/16/RxJS-Creating-Observables/index.html","f8ec83c6595031f95372542e16add60e"],["2016/03/16/RxJS-基本概念/index.html","b7c6523f5d471c794332ad60a9544643"],["2016/03/21/RxJS-请求数据更新流实例/index.html","36a218d52c169ac4b51315d4bd29017b"],["2016/03/25/Rxjs-重构/index.html","c1b24f9ad4b693c37f1b4afb56614051"],["2016/03/28/JSPM-TypeScript-React/index.html","8c81f5cbc21afad6a315c0ca65833646"],["2016/03/28/React-React版的-ngFor/index.html","cc23b7d843f1b138c3d3b08fa2e02f3b"],["2016/03/28/React-The-First-Try/index.html","b7d9448548b15ce218145cb79c8c32c4"],["2016/03/29/How-JavaScript-Event-Delegation-Works/index.html","791f2aede500fb458dd99a8184fb049d"],["2016/03/29/React-State-状态管理/index.html","f3de86940221710fd98c07161a28c7aa"],["2016/03/29/React-简单的状态传递和事件处理/index.html","8cd6cf990268b64d6650f3d13313f9aa"],["2016/03/29/React-组建Namespace/index.html","bcd5f2895f311fe9b4b54d8589c7382a"],["2016/03/31/NativeScript-经典view-model解析/index.html","1a861db3900bdae7a74562e53d079e66"],["2016/04/06/NativeScript-App-LifeCycle/index.html","c2070372ce3917ba33e1e2c3b5448ac4"],["2016/04/07/NativeScript-TabView/index.html","093e08ab2fdee329df77e4cc0eaf8c44"],["2016/04/11/NativeScript-Button/index.html","681f5f7a963e1c905f7ab8611cb9d85a"],["2016/04/11/NativeScript-Label/index.html","e874ec30aab6f2ceabd5aee2f000c90e"],["2016/04/12/NativeScript-TextField/index.html","6ae3e5a5a301519469b0620066b5d9cf"],["2016/04/13/NativeScript-SearchBar/index.html","243172d14aacc0940b5393f3552b7889"],["2016/04/13/NativeScript-Switch/index.html","b880d7705c590cefa044100af7b8bd12"],["2016/04/15/NativeScript-ActivityIndicator/index.html","7282423699d97936fec0d6e702fdcb0e"],["2016/04/15/NativeScript-Progress/index.html","dc49b8dfc93500d6427d0694b98babb6"],["2016/04/19/NativeScript-Image/index.html","f72b6c4eb676b86fd90705011a2ff7b4"],["2016/04/19/NativeScript-ListPicker/index.html","4559ebaee82d9ee2c7324b205f414f65"],["2016/04/19/NativeScript-SegmentedBar/index.html","05627c010567806582c11ccfceb4a609"],["2016/04/19/NativeScript-TimePicker-DatePicker/index.html","8dead7a08277c7cd41091d098a0d12f5"],["2016/04/25/Angular2-DCL-inputs-outputs/index.html","28e217aa4e7efc20116d02beed187fb1"],["2016/04/27/Redux-TodoList/index.html","8b51c9b02646f3d8a48878c7d6183ab1"],["2016/04/28/Redux-compose源码解析/index.html","333cdf524896d1237f8336ed522b72e0"],["2016/04/28/Redux-createStore源码解析/index.html","57d4117558eb681ec32eb1fc5ff90233"],["2016/04/29/Redux-applyMiddleware源码解析/index.html","9062eecefa2b9c092614604a82127435"],["2016/04/29/Redux-combineReducers源码解析/index.html","ea7ff6a0bf93488f3863239eea296ad1"],["2016/05/03/React-Router-Configuration/index.html","358ae3693b06b7b25d483006d1272941"],["2016/05/03/React-Router-Introduction/index.html","b140f862d59eb0448076946798212df5"],["2016/05/04/React-Router-Dynamic-Routing/index.html","ded6bbee408d614b72f3d9f76501693e"],["2016/05/04/React-Router-Histories/index.html","2f9da3dfa9fa57a15413d0374b3fc1f2"],["2016/05/04/React-Router-Index-Routes-and-Index-Links/index.html","056a9c878aaf048815fe9aebfe3b385d"],["2016/05/04/React-Router-Route-Matching/index.html","f92321cb4ad9bff472084cbfddbf19f0"],["2016/05/12/Rxjs-Operators-Count/index.html","0e5a94f828a335ae7db629334b244ac8"],["2016/05/12/Rxjs-ngPagination/index.html","6e2620811113a677e6c65caa5ee63eaf"],["2016/05/16/Rxjs-Operators-First/index.html","6e8025300d35de94998b729bcae99d76"],["2016/05/16/Rxjs-Operators-If/index.html","b0c475a164a939982eee7ecfd377c988"],["2016/05/16/Rxjs-Operators-Last/index.html","f57e9c80ff84b4779521b4b33a498dd2"],["2016/05/16/Rxjs-Operators-Partition/index.html","3bebe3292eb371dd6283366fb9a83b51"],["2016/05/16/Rxjs-Operators-StartWith/index.html","6b0c09e67d8ec6bee73f4316fd296ee1"],["2016/05/17/Angular2-ComponentResolver/index.html","91894c58684c10531ad9f95f7f5faaa1"],["2016/05/17/Rxjs-Operators-CombineAll/index.html","5d01c3f9001f37b8f9894db4ff614f5d"],["2016/05/17/Rxjs-Operators-CombineLatest/index.html","4bef88e30ce6ef7c812c10cafe99f41a"],["2016/05/17/Rxjs-Operators-Concat/index.html","d302d16aa7c583f1a54b21343cd58ec1"],["2016/05/17/Rxjs-Operators-FindIndex/index.html","e9fb5e4799d4bf844759831877503b61"],["2016/05/17/Rxjs-Operators-Switch/index.html","78f4cc17bf20c65a12990b7f4acf0520"],["2016/05/17/Rxjs-Operators-SwitchMap/index.html","78aea70ade206ba01d37528047d24e03"],["2016/05/17/Rxjs-Operators-TakeLast/index.html","ad407bb8fdb9ff16f92bb734b58640f7"],["2016/05/18/Rxjs-Operators-ConcatAll/index.html","bd23751ff584d3643fced75d67d209bf"],["2016/05/18/Rxjs-Operators-ConcatMap/index.html","2a3f157c4c4ca22e212544f6696103a7"],["2016/05/18/Rxjs-Operators-Defer/index.html","014a808718e3452ae55919c752e93a26"],["2016/05/18/Rxjs-Operators-Delay/index.html","c14862cbe79fe257c3ba0e91285e6c50"],["2016/05/18/Rxjs-Operators-DelayWhen/index.html","22554cea9dba052c126884fb9f32cdd6"],["2016/05/18/Rxjs-Operators-MergeAll/index.html","c8d7eaa46b5a5aa10fe4f2fd8d5ea7f1"],["2016/05/18/Rxjs-Operators-MergeMap/index.html","52d5d57442a0ff1805e0dd05c60e72a8"],["2016/05/19/Rxjs-Observable-Cold-To-Hot/index.html","8307a55493fa1bb86b136061c64b085d"],["2016/05/19/Rxjs-Operators-Reduce/index.html","06c454845f50caaabe7a34e0db1a4a1b"],["2016/05/19/Rxjs-Operators-Scan/index.html","65ebc651c14cdb937f309a060053adfb"],["2016/05/26/Rxjs-Operators-WithLatestFrom/index.html","21a03081955efc9f30292a00ad14e188"],["2016/05/31/Angular2-ionic2-First/index.html","99b29ca351ad693511548f1f0a443f07"],["2016/06/14/Rxjs-Operators-forEach/index.html","e25bc996b4c8417a946e27e02a12c795"],["2016/06/16/循环事件注册/index.html","cb018813c6e8a1f940f34511931a14c9"],["2016/07/08/JS-modules/index.html","51789bc25ab4156eb225668e867d0c7e"],["2016/07/08/Responsive-Embeds/index.html","54aac1e0f757d94e09fb1d8ab6f78afa"],["2016/08/10/SCSS-Helper/index.html","c3118d8fd372c717003b7837a1dec190"],["2016/08/26/Almost-complete-guide-to-flexbox-without-flexbox/index.html","10a89702364699446f6948e6c4ef389f"],["2016/08/26/Cmder_Git/index.html","f6f3a9207a8deee98c9e31e9040a5e64"],["2016/08/26/github-免输入密码/index.html","6b90ac6d05db3ebfc13d4bf7295ff0b9"],["2016/09/20/从boilerplate中学到的redux里replaceReducer的按需使用/index.html","1794eb3b61b219f4ac521164f111d530"],["2016/09/20/浅谈RSK-Mobx-SSR整个改进过程/index.html","661f6d6f9a0eb6c97f188b5fa3467475"],["2016/11/17/RabbitMQ初体验/index.html","ddea81e9b04b42713f6bae1d9a7e3445"],["2016/11/18/basic-redis/index.html","d58aa561a70d76e4b7cae29a788701bc"],["2017/02/19/akka_stream_Mat/index.html","325c5a1706a33ac8286a419c2c5c7acf"],["2017/02/19/akka_stream_basic/index.html","870434badd4ce79cbe1e14cb9a7057ad"],["2017/02/19/play_http_ ActionFunction/index.html","54adda1b27203f7f370eafa00c5e3180"],["2017/02/19/scala/index.html","98d25846b60551a69dd89ebdab6f68fa"],["2017/02/19/scala_Option_collect/index.html","f04c57a219dd8cf7d5b07ffbbfdb9116"],["2017/02/19/scala_curry/index.html","0fd21fe193fb619e418af555010e895c"],["2017/02/19/scala_pattern_match_@/index.html","3ebadb91437de88b929c3a44f45d03ac"],["2017/02/19/scala_seq/index.html","e7f81d2e6f608913b1e621e5b6d29955"],["2017/03/12/第一个npm包/index.html","03a6015ae6c4b3d6c57b33a75869c0d7"],["2017/03/14/how-to-install-postgres-on-Mac/index.html","dd3f76ab6251796702fbf64fd57c87de"],["2017/03/18/Success-vs-Success/index.html","777aa8ff39101be72e544834278953bb"],["2017/03/22/first-try-with-slick/index.html","fd3e4b839a625608e6d5670f42e204a5"],["2017/03/23/git-remote-branch-删除有依然可见/index.html","7d52909a98532d963888d49898903fde"],["2017/03/28/slick-条件插入/index.html","a3a0e07d987ffe4e0dc8c7591494d9ae"],["2017/03/28/slick-返回值包含多个相关数据/index.html","7738faacef842492f6f7add67c1033b2"],["2017/03/29/Akka-打包部署/index.html","c9a2f68457b8307b219986f7a462e64f"],["2017/04/01/重新思考react-返璞归真/index.html","a819a0e1cc8cfab7c1b99905bbef2ef6"],["2017/04/12/RN-Navigator/index.html","1bf4866a9f2c980b5a431cd4bbb539b9"],["2017/04/18/RN-router-flux/index.html","77524864bd72fedc21c82b74c79eb228"],["2017/04/20/SW初探/index.html","784cb0b966193911c9194193eb4517c4"],["2017/04/27/Actor-Actor-API/index.html","ca72671f7e9f486036e09d559a07088c"],["2017/04/27/Actor-Creating-Actors/index.html","f66c23bbaf038e008989fb8e55e796ba"],["2017/04/28/Actor-Send-Messages/index.html","d88cb5d2f64ee1d2c400ce20e50acd59"],["2017/05/02/Actor-Become-Unbecome/index.html","70339dab086ca137c4895cd72b645f88"],["2017/05/02/Actor-Receive-timeout/index.html","af712aea14b2d94bb391e135a7351b48"],["2017/05/02/Actor-Stopping-actors/index.html","bd8b4ecfa1a6999ff113038cbdaa378f"],["2017/05/03/Fault-Tolerance/index.html","74dc6aa9de3166b2e03b6539f6fcfd3d"],["2017/05/08/Nginx-部署SPA/index.html","aeca44a06fa08fec5cb6c7f3fc2ac526"],["2017/05/10/Actor-Routing/index.html","034cedd139e4eda0f72ba20548ca938d"],["2017/05/11/Actor-FSM/index.html","645e0abfa8753db8f693904e4dbcfa39"],["2017/06/12/Functor-定义/index.html","59d4532b749b9a6feac64acb5fb513d7"],["2017/07/28/docker-compose-nodejs个人开发环境/index.html","4e4656705ceb11ef1147ede156912710"],["2017/07/28/docker-nodejs/index.html","a08b0a7cc2e78f18ee07fbc6832ebc30"],["2017/09/05/Nginx-proxy/index.html","41956ed6f857b9e07cfd29365018f5b4"],["2017/11/07/golang-ls/index.html","b187da3840201508d1a93e57f64a98a1"],["2017/11/08/golang-ssh-tool/index.html","fb20b56d8f118e6cfbdb02ae7f13f49c"],["2017/11/09/golang-simple-JWT/index.html","b1d68999ecd19e3645990643cc53280a"],["2017/11/13/golang-youdao-dict/index.html","e1b52ea6379ace3d5cbced6fad3d494f"],["2017/11/20/golang-Counting-Duplicates/index.html","a10fbc4f3f388407d05c8b25f2f75fd9"],["2017/11/20/golang-grpc/index.html","5a7b92a7bba8ae580c84cda4d04d450c"],["2017/11/21/Algorithm-希尔排序/index.html","952b33182a017e509f43b7754d5f404e"],["2017/11/21/Algorithm-插入排序/index.html","79bde10b8d31865f71944414d25cf630"],["2017/11/21/Algorithm-选择排序/index.html","602c55b7dc67fe033dbe3326e8cc74a8"],["2017/11/22/Algorithm-无序链表/index.html","59a59188f4b55cba20d72426d1096c1c"],["2017/11/23/Algorithm-二分查找/index.html","7e56528c75340c91bd42582e17ce8ce0"],["2017/11/24/Algorithm-使用深度优先搜索查找图中的路径/index.html","be2a9a1bda61a0d7c7ae648c24b4f149"],["2017/11/24/reflexgrid-任性的flexbox布局方案/index.html","ef2399c460fc667c0374a3c08e974e2e"],["2017/11/24/字体抽取工具-Fontmin/index.html","9947d63ed4a3f5861b15d11e15d3557d"],["2017/12/20/golang-gin-demo解析/index.html","12657d52c4e504b10f8d491424b10a56"],["2017/12/25/不一样的拥抱变化/index.html","8b9fa02f17c706071a1abbaeb52f5ef8"],["2018/03/08/NodeJS-分层思考/index.html","5d3ec06cedc3d16e18326b7e27379219"],["2018/03/23/golang-fileExists/index.html","a9a083c5b4d22c585fe369fbb05e88a8"],["2018/04/24/elementUI-组件解读/index.html","56fbc73c37ab72e85478185c360754ef"],["2018/05/10/ElasticSearch-create-index/index.html","409cbba05feacd920430f6ca3809660e"],["2018/05/10/Element-mixin-emitter/index.html","94cd86a07e988ced424d6defe6541fb1"],["2018/05/20/golang-base64简单解读/index.html","157fad969a4910821050b70296581a82"],["2018/05/23/vue-自制bus/index.html","8e1b86194a0dda1cb137911d3e9ee275"],["2018/05/25/golang-websocket-AcceptKey计算/index.html","47e4c37574e55fbb54c18defe1857d54"],["2018/05/29/ElasticSearch-初试Query-DSL/index.html","dc9edb82a94ac542c88c65ac8a7707e0"],["2018/06/15/WebRTC视频聊天/index.html","d18b1e34b84b399be7847e7a0f55fe32"],["2018/06/15/微信小程序/index.html","0d92d04c9ed8c67dac8faf8f0c8e4309"],["2018/06/21/axios和ios9那点破事/index.html","8a800aca0134230e7102b6032a3673ca"],["2018/06/28/golang-goroutine-pool源码解读/index.html","24953e895978752e313eea369f181c1e"],["2018/07/06/Element-OSS-upload/index.html","f168f420c6f87d47971f7376fb5f0452"],["2018/07/09/golang-nats/index.html","fc5aa1df4d60e18280760716fd26c62f"],["2018/07/10/Three-3D文字/index.html","21dfb43a1c4912f36ed57adcc7cede87"],["2018/07/13/Jenkins-FE-CI-CD/index.html","9743bbcbcad769e9d2b5f9cc3a0e4d7c"],["2018/07/19/Jest-VUE-UT/index.html","2e558e07c30f1ecacc3ddc063c1f3531"],["2018/07/23/重复代码扫码-JSCPD/index.html","59e9f1bc35605d67a9ed6a6b7d96dbf2"],["2018/07/25/圈复杂度衡量/index.html","5276f68f51c3874db2051dc793459734"],["2018/08/07/Newton-s-method/index.html","720dfd5456b8c5827eda93d895596268"],["2018/08/08/golang-compare-struct-slice-map/index.html","db2d8cdccebcc44b691784bb99450fbc"],["2018/08/15/Docker-Sentry/index.html","0d64a81966dbc99f030fa88d7a3282d6"],["2018/08/17/Sentry-node-express/index.html","077f2aadb195f3a2432aa0bc4b7dbda8"],["2018/08/28/前端质量思考/index.html","b0e629ad6ef9de3af7b9bfc8551b704e"],["2018/08/30/VSC-TAL-FE-ElementUI-Snippets/index.html","dbee9247898b320af3e1c78164906a42"],["2018/08/30/VSC-TAL-FE-Helper/index.html","6e14ad6fd9e31d67250109941ddcc9ba"],["2018/09/04/Docker-SonarQube搭建/index.html","4b6768e0b5ed6c43c265f48585e9d621"],["2018/09/11/golang-uuidv4/index.html","878fb32a2540e80344d956fdcbb56f78"],["2018/09/12/golang-uuidv1/index.html","9d21e28dd1d6ad7cf4e96b5828a3d287"],["2018/09/14/Etcd-分布式配置中心/index.html","8ecf9f05e379f276a689988cb6711ad9"],["2018/09/18/Etcd-分布式配置中心2-runtime切换配置/index.html","6af889d71c31170b5f8789ba22168fbe"],["2018/09/25/CSS-Collections-Buttons-1/index.html","5abfda1efd594fe339008564f1bb1d7d"],["2018/09/25/CSS-Collections-Buttons-2/index.html","692a368b913f499bcfeee3b4ab6b26db"],["2018/09/26/CSS-Collections-Buttons-3/index.html","c65eb448afd04dcea1d585209e8cfbda"],["2018/09/26/CSS-Collections-Buttons-4/index.html","2f09fbe4f933fbb6f3d3a11f062a88f7"],["2018/10/10/关于opener的安全小技巧/index.html","47dec59edeb38a957a6b3fc246d73715"],["2018/10/30/前端独立部署-最小docker化实践/index.html","84e6f805f540b4e8a781fa297e902bf9"],["2018/12/05/golang-Trace链路跟踪实践/index.html","73fd4892dfe319d617f7590edc546643"],["2018/12/12/golang-grpc-Client-BL/index.html","c25d4e991c6337a66b03774c1ec282a4"],["2018/12/18/Makefile简单脚本应用/index.html","aa3ef903437a3ed4cbf47ed52c152117"],["2018/12/29/2018年度总结/index.html","47f021e0d29819fff511a9dc7a21b68e"],["2019/01/18/Element-偷偷引用内部方法/index.html","4d9f4f3456c87bd3cd449d809ac54759"],["2019/01/22/玩耍github/index.html","c8d82f381a96df147ee0ae6fbbd19b32"],["2019/03/12/Vue-vue-device-detector/index.html","ae9e5d334e5ac899fc85208839f19bdc"],["2019/03/12/Vue-vue-storage-watcher/index.html","531ebe5890bd4b377e61b57005e9a55d"],["2019/03/19/Vue-vue-lazy-calc/index.html","bfd826b615e4dd312c154dc17d330623"],["VEN/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["VEN/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["VEN/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["VEN/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["VEN/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["VEN/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["VEN/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["VEN/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["VEN/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["VEN/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["VEN/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["VEN/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["VEN/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["VEN/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["VEN/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["VEN/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["VEN/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["VEN/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["VEN/font-awesome/css/font-awesome.css","8e12157da5fc90094ae4113ba110456b"],["VEN/font-awesome/css/font-awesome.min.css","0831cba6a670e405168b84aa20798347"],["VEN/font-awesome/fonts/fontawesome-webfont.eot","45c73723862c6fc5eb3d6961db2d71fb"],["VEN/font-awesome/fonts/fontawesome-webfont.svg","76a4f23c6be74fd309e0d0fd2c27a5de"],["VEN/font-awesome/fonts/fontawesome-webfont.ttf","7c87870ab40d63cfb8870c1f183f9939"],["VEN/font-awesome/fonts/fontawesome-webfont.woff","dfb02f8f6d0cedc009ee5887cc68f1f3"],["VEN/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["VEN/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["VEN/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["VEN/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["VEN/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["VEN/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["VEN/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["VEN/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["VEN/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["VEN/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["VEN/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["about/index.html","a082a2f4b1097fd31f07177fcd050deb"],["archives/2015/12/index.html","34d7fd32b4d182f2b7539de583a04266"],["archives/2015/index.html","e157f6ffd221d86b1ee3cf6ee5cb513d"],["archives/2016/01/index.html","1f71fa259a8896e4025c782950fbcfb4"],["archives/2016/02/index.html","8ee01bf60638c0fae6d6b710bc210407"],["archives/2016/03/index.html","eb776242a3eef1d96fa8c0dc7b50d7d5"],["archives/2016/04/index.html","e6af3dd82aaa6e0b23187321767912c7"],["archives/2016/05/index.html","008543a4716e22e78a84d48e3240855e"],["archives/2016/06/index.html","671934b4b3087407c04feeb47a806847"],["archives/2016/07/index.html","6b9a3c719aefbb71eab1014facb02539"],["archives/2016/08/index.html","328cac4115d5bd7fb556a25a0ff4e36e"],["archives/2016/09/index.html","f452e5a693f0afb99fb930407f328d3c"],["archives/2016/11/index.html","62ab8d33cfdc8c5dc6c34f3bb7b85967"],["archives/2016/index.html","146d593c84a770a59eaef027e09f681e"],["archives/2017/02/index.html","e2776a3e2e1dc1fd8550bcf03465e1ff"],["archives/2017/03/index.html","3b11c49712c45aed8e45149f73cd438f"],["archives/2017/04/index.html","de881befcabffc89efed7090992f1e02"],["archives/2017/05/index.html","078f529dde2849d90876f089bd93505e"],["archives/2017/06/index.html","b7ea64347dffd5b5af51225cecbab826"],["archives/2017/07/index.html","a040825402bb0ba22ebe9253f77cf3dd"],["archives/2017/09/index.html","e69f2a0e8aaf032ee120ad5ef44018c5"],["archives/2017/11/index.html","0e14b2222cb18a30c518c93c2be6558e"],["archives/2017/12/index.html","be02b0f724a5047a87bdabaab7f8a5a4"],["archives/2017/index.html","d1e6a2461985b344337c1966b021cbb7"],["archives/2018/03/index.html","217a3fcdafff887ea9aedd80224a3468"],["archives/2018/04/index.html","b7ac90d1d6425c1428e6933c7ea38440"],["archives/2018/05/index.html","eac6b03c3f44dc9f2c0af5d113187106"],["archives/2018/06/index.html","69818b7795c5e34ff59970f576d495d8"],["archives/2018/07/index.html","3a428a521da504fe34c2cb41a1978307"],["archives/2018/08/index.html","39ff8f14e107d094e2e6ab92f670a41f"],["archives/2018/09/index.html","c08d58b9597659b8409dc7139c3e3252"],["archives/2018/10/index.html","5bcda554370e91be0358a5d4a179000c"],["archives/2018/12/index.html","8ed0b8625e8ddf1c96699d2b3d097ad1"],["archives/2018/index.html","0cab487815399bcd076bd902a7c0be09"],["archives/2019/01/index.html","7f659b01c84e19433226e3d7b65f2da0"],["archives/2019/03/index.html","0c46304fbcc0b5df216684a7b96781e6"],["archives/2019/index.html","b9d262324385a5ed0c73dd94515f1c7a"],["archives/index.html","99fed29440f19e282c0d868ef82632c3"],["categories/Algorithm/index.html","0dd61b2d373247bb296d4f33e3c22fae"],["categories/Angular2/Ionic2/index.html","e19c64b0e9b0f7cc370698eb83631e9b"],["categories/Angular2/index.html","4b6a804cb177cea085338338c220fbbb"],["categories/Angular2/page/2/index.html","9d0640bfe8d1dcd2fc7c86afe00e42c9"],["categories/Angular2/page/3/index.html","88e0c5166e5adc35033f88231ec31019"],["categories/Angular2/page/4/index.html","a1d6c12faad527fcd120cda4429ac3f3"],["categories/CSS/index.html","be4ad1fce97c7060c80b4df4120963bc"],["categories/CSS/page/2/index.html","f6a2a3a119cae1a634170668b552a768"],["categories/CSS/page/3/index.html","22e5dcc19af6cedf25e3b209daf84803"],["categories/Docker/index.html","ab127ce126edd0995f9bdb0b23ba12eb"],["categories/ElasticSearch/index.html","f4a47a547e64ba607bdcb5cd8c0c4dd3"],["categories/Golang/index.html","93889c48ba66bffca233da31c734253e"],["categories/Golang/page/2/index.html","26a32eb8790942fba0a1e574a94dd794"],["categories/Golang/分布式/index.html","087be69b61c5ded6b3c7f067d9025e45"],["categories/HTTP/index.html","5470b2500b4fe667d4ba2d8bc7b78512"],["categories/JS/WinJS/index.html","d7b24c471b3ec51ba09da87a25883ed1"],["categories/JS/index.html","ce8208bf7309fc8e1d3a298d7c5b8600"],["categories/JS/page/2/index.html","14c4d4a75e46852404b5ae8ff37d5dfa"],["categories/Jenkins/index.html","960697e1784b25e109734aa19b56ba52"],["categories/MongoDB/index.html","834cd88980ad7bcd0a97f77b22947f1e"],["categories/NativeScript/index.html","4393e17320e00bc2a3066d5d987c8b03"],["categories/NativeScript/page/2/index.html","8081a774c4e38631af2cf23e4ed6ffee"],["categories/Nginx/index.html","83567e8265ba792eb3cbfaa690c647d5"],["categories/Node/index.html","88b201059adb02b25c9624a72537e4e1"],["categories/Node/page/2/index.html","bb261890348d40c711033d22d86aed9f"],["categories/PM/index.html","759474c11d42f0cd28de5b231aa3f990"],["categories/React/React-Native/index.html","eae34007227d6172d60c3c07dcbdf9f9"],["categories/React/React-Router/index.html","544a8b0cc40b3684b0ea06ed1d519002"],["categories/React/Redux/index.html","d685102c9bff90f39ac9b94dbac9c287"],["categories/React/index.html","2a0d84dbff58ec202d4ef702a9f937d6"],["categories/React/page/2/index.html","b9f1368f03931b6ff47d887109bd129a"],["categories/React/page/3/index.html","4059c85a9c6746ce427b78c740f5e0f7"],["categories/RxJS/index.html","fc795504cde3b36ce1c425d3e8152f5d"],["categories/RxJS/page/2/index.html","6df370aaadd3994f3d42c9e1a39283f2"],["categories/RxJS/page/3/index.html","d95760b9106050ada63881aaa3f05160"],["categories/Scala/Akka/index.html","ac2af1eff1077429b1756f921682fdce"],["categories/Scala/Akka/page/2/index.html","162287f139630adadd2e588adc13c78e"],["categories/Scala/Play/index.html","e2740db12b69a5e957c086ad41a07426"],["categories/Scala/Slick/index.html","d18e35b337010e619d48ff2c90bf3ed3"],["categories/Scala/index.html","3c59bbdbefa7097b2bb1ac45d67161f7"],["categories/Scala/page/2/index.html","5a07641f5431c8c2503595a510c0ea0a"],["categories/Scala/page/3/index.html","3d9c8b5729dae7fc847d08c031141ba2"],["categories/Shell/index.html","f95449638e734afc6c3afe49e29dc3c8"],["categories/Thinking/index.html","c690487201c0b81d84ff6afc1cda1869"],["categories/Threejs/index.html","eee257154dffd44e9d0af0bc911cd931"],["categories/Tools/index.html","61f59a4e8d0a7e0914456b35b26658b5"],["categories/Tools/page/2/index.html","0121dc0821dd80870c1337ed2513f1c9"],["categories/TypeScript/index.html","531d631f5e5c99e7802e987655c2ae1a"],["categories/axios/iOS/index.html","de443f563ca6d391d1f97bf17dce519f"],["categories/axios/index.html","f1d74daba41b61c94138922c6ba9b318"],["categories/github/index.html","2ea6034a1bcda751b2034a7b385d41d4"],["categories/index.html","1effed3a29b7ddc037df6c8398919c74"],["categories/vue/index.html","7eecb19dcbd90bc34fd6ca214caa7c64"],["categories/web/index.html","334e99d87ab78a07059a37250fb02a6f"],["categories/weixin/index.html","d96e9a233e201fd103ecdb46016e0d94"],["css/main.css","07b06ae5cb8bc9c8d95aaa6c44670178"],["images/avatar.png","65b0d841b964e5b8a4a4a971b09b6fa2"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/icons/icon-128x128.png","2095f6ffe68ca2a4653414b14a52fe58"],["images/icons/icon-144x144.png","20ba1ea38addd3952345b36ac3cecb63"],["images/icons/icon-152x152.png","558da096eb6bf41d52ef984f3e3ff3d8"],["images/icons/icon-192x192.png","d60f50b599b41af403ffcabe8d5fda1e"],["images/icons/icon-384x384.png","0622ab0164714b79448aeee0a910c46f"],["images/icons/icon-512x512.png","d309e2dfb0657349ec8ca467e74d4c9d"],["images/icons/icon-72x72.png","7ea05775922505f7d0cea1b895afa8ff"],["images/icons/icon-96x96.png","418957182b60b9a8805e014c35311bea"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["index.html","89e12df6fa65e811d5b234702ef474e2"],["js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["js/src/bootstrap.js","73c38465c33a6b7d49820f12d4b6cd09"],["js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["js/src/motion.js","5e50cb0717c2be4c43ecd948b3abca59"],["js/src/post-details.js","a64526b288db34b054ebd5f22c061754"],["js/src/schemes/pisces.js","95b6f118d6fdf262f540d3a9144fd79a"],["js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["js/src/utils.js","c9dbca6eabd5a792c0fbac43c7ef96a2"],["page/10/index.html","8a398c5b28e581c982f2b4571f3ae614"],["page/11/index.html","1aa8c51b9b774760e593b49a2e1fd9b5"],["page/12/index.html","7e676c216417d66dd48d79234cf0b06c"],["page/13/index.html","2466a463bbbaeff736862752540871fe"],["page/14/index.html","e2cfc5778426d47ba2c65767ab50579d"],["page/15/index.html","2c7dda38a19b67c4aa800d177afe421f"],["page/16/index.html","0df603df49966d2692a1fa72802e5721"],["page/17/index.html","373fb14edd155722025d64411d1d0d1c"],["page/18/index.html","1642f0a2f6ac137d923c20beade01747"],["page/19/index.html","e4bd7e30fd0563b1569062554afd3c96"],["page/2/index.html","f2a400bce49a3533aa6c59197c933703"],["page/20/index.html","61cc047c2c4d828c216da3399eb504dc"],["page/21/index.html","7e42e74fdd9babb9aec04883e36a67f6"],["page/22/index.html","24a7e49f8dad75749d84d5e94213a859"],["page/23/index.html","90c870758f546201500cc8abd0661d75"],["page/24/index.html","c677ba14091475e5004014515557b381"],["page/25/index.html","da81f992442eb20c3a6213b1f9e1fab7"],["page/26/index.html","e514d59005a8fc9824d27108b955dd91"],["page/3/index.html","9820d41fb949e6d011dac4b9127191c9"],["page/4/index.html","fe785701340a1f7abc63e2ff886f87bf"],["page/5/index.html","a5ee3fa717f7d676fd7a18ffba38c82b"],["page/6/index.html","fe3ddfb787ff2bda02bfe0f3c4c7b71a"],["page/7/index.html","40475edca1450c30a900d9359fd480bd"],["page/8/index.html","2ead0696dcc94534b2ca6a67d24fb496"],["page/9/index.html","15475244e938e006f1e0532700d01a00"],["tags/Akka/index.html","b5baab719ea73710650f0483d7699b1c"],["tags/Akka/page/2/index.html","fe2a28410f81cd9001b8da5dc84d4ef6"],["tags/Algorithm/index.html","294814ea3a7971e90e03c36692288406"],["tags/Angular/index.html","96304448aa8c8cfc7a2d0e52951fb235"],["tags/Angular2/index.html","5d6c751c1842977a49386f676ff1d6ad"],["tags/Angular2/page/2/index.html","5e24e4cac882bd40977a71124849357f"],["tags/Angular2/page/3/index.html","565a00f8481b4bf8d7302cf4e09313cd"],["tags/Angular2/page/4/index.html","ddb1e6b262c8d3afc85bc959217d5644"],["tags/Angular2/page/5/index.html","c4ae73d9215a1a59d57814c2def01692"],["tags/Bind/index.html","ae27f6ee9d7f11cc75a343840d203115"],["tags/Body/index.html","79abe59cc9f7756517b684e340f5f72a"],["tags/Buttons/index.html","2bec17066e87ef03ee97fdf2179788c5"],["tags/CORS-Node/index.html","917fce2e1c5147d5ed8be85aba7702e4"],["tags/CSS/index.html","bdb4716018916ecdcb235d08c37512a4"],["tags/CSS/page/2/index.html","090a22c21769911c74881ffd9c5b7739"],["tags/CSS3/index.html","7abbc60d47db9137d6d08c36a4532765"],["tags/CSS3/page/2/index.html","aa88bd07fd61c81adf51cfa469eb742f"],["tags/Cache/index.html","f894481b7ffcb5c23b79be4f075d83a4"],["tags/Class/index.html","769cc597ea3372f99a2270a8200cfbb7"],["tags/Class/page/2/index.html","b46d1b0b771076d9ae7082dc7cd18c39"],["tags/Componnents/index.html","702c3822abe89352d9de97ce30dbc861"],["tags/DOM/index.html","052f3cc12c3f5284079246d696219491"],["tags/Decorator/index.html","0eb2b766be2cef59e7a84a700e02738e"],["tags/Directives/index.html","e932759400a64fd08b762c9d1b15801d"],["tags/Directives/page/2/index.html","9ea87686cd364d4e6df7f9e94abaaa02"],["tags/Docker/index.html","a723b9c35c8228b54bb707c80e6cfcc1"],["tags/DynamicComponentLoader/index.html","1160e3dfc0be5455401739907ec322f4"],["tags/ElasticSearch/index.html","152b7b2f184e28a39c590ce16affc706"],["tags/Etcd/index.html","c6a4950d484b05074b5221ebdf045ca6"],["tags/Events/index.html","0bbf19f57b6c6a47e299eae7f5b26671"],["tags/FP/index.html","b86c5c67709e1b363f87efa74e4f0b50"],["tags/Focus/index.html","c7750886c06c4f6485a85aecaf67cc1c"],["tags/Git/index.html","5063bfc25d3a52cd24903b2178868362"],["tags/Golang/index.html","5293248e5f12b7190cce38b32830e14c"],["tags/Golang/page/2/index.html","e7e94cda9071820a2c6711b78b686b1e"],["tags/Golang/page/3/index.html","8f99c7b44c4e1b2984eb793fe21c9cd3"],["tags/Gradient/index.html","58e509c8f8ed7933be90c61160360b77"],["tags/Gulp/index.html","bcdab0bf75febfda8cd8a47541984cc6"],["tags/HTML/index.html","5884d3851b666519a56e508cdeb2be6c"],["tags/HTTP/index.html","4db75ef02c6d146fbf72154a4577c8a3"],["tags/Host/index.html","a996ebdcae559998223296ee007ef83f"],["tags/Hover/index.html","f92b98c3a373c4eb976cc7b6ceb28a23"],["tags/Ionic2/index.html","da5ab4f3993eed6c5a911a9565e79d14"],["tags/JS/index.html","1a1cec42c28fa22ac0734c92a2c3c1ce"],["tags/Jenkins/index.html","949e2edb2267527b0ab1fe1c4cd86208"],["tags/Jest/index.html","c7d6dfba5c961f459164ead61ef635bd"],["tags/Koa/index.html","0ac9239b58a2a4b9ae77c641da1aaa67"],["tags/MQ/index.html","d87258516e644f8612c4cbd5d771629a"],["tags/Makefile/index.html","9f3e86779bf9c3a5f67f535b0d807cbd"],["tags/Mobx/index.html","9782aeb957a6595dc27a551df5c0f91b"],["tags/MongoDB/index.html","e150acc820841d3d91fa3ae470aad086"],["tags/NPM/index.html","f9a2fb937b9c0727a974ba98df829c64"],["tags/NativeScript/index.html","f456636afb876b2248994e92968f430b"],["tags/NativeScript/page/2/index.html","522db1392075ad6795ce4822788734f3"],["tags/Nats/index.html","55db18bfd7d722fe71787bb041b343fc"],["tags/Nginx/index.html","6b818c015ad20d965833c6c1e97d292b"],["tags/Node-js/index.html","b13feee2a35cb8e9ac550350d896100b"],["tags/Node/index.html","6581d38c16e17e27f6ec13f7717cf6d0"],["tags/Outputs/index.html","9c1cd5c2521899ed965dd7cec9c195f3"],["tags/PM/index.html","dc1a5b85c76dd7432e23b753d35afbc4"],["tags/Parser/index.html","6c723673945a6a8874663499430a5959"],["tags/Pipes/index.html","5bf8dc09a969e28ac46c17cc530556f6"],["tags/Play/index.html","00334191b71db4817a12fc7ac69e8a87"],["tags/Postgres/index.html","8ab4b66323b7e4ab6a9483e022cf3558"],["tags/Promise/index.html","e681ff4bb29b8579b077a66371b218b1"],["tags/React-Native/index.html","61e71b229db82904f394b05995279ed1"],["tags/React-Router/index.html","fe9d7a2d54768639ce401fe655fada67"],["tags/React/index.html","ee8bb19eff830bf1e7b1a2e2ce0a4912"],["tags/React/page/2/index.html","ec093f093e607970defbed8aa1eb16d9"],["tags/React/page/3/index.html","f790099d0effb3650e4f65e7193a28f4"],["tags/Redis/index.html","6a8f3932e924306c7fa888502f84f137"],["tags/Redux/index.html","657457385b7a3f9bc248b5f7defe4e72"],["tags/Route/index.html","82312aa96f0d286e331e4f1a47205dc5"],["tags/RxJS/index.html","2ac59bb31eb1ebccc1f3d81d10793a9f"],["tags/RxJS/page/2/index.html","490c1a65135283bd15323e0eebdc369f"],["tags/RxJS/page/3/index.html","0e03a5b78bcb78db600f5e4cf9de330d"],["tags/SCSS/index.html","fd7582d27867620594b6a8ca22b90912"],["tags/SSR/index.html","5e327da805198333c6f8bdef3ee1bddd"],["tags/Sass/index.html","7b41256375fd82ca4ba182c970649cff"],["tags/Scala/index.html","13ba315085155aa5d2818e73163b5b21"],["tags/Scala/page/2/index.html","cb5fe749deb271bdc3eb99a5f1fa540d"],["tags/Scala/page/3/index.html","061f30846250f59d13c59b617e2a0d99"],["tags/Security/index.html","6cae5504344506e732ed9d13ca2f7fc5"],["tags/Sentry/index.html","904d59422cd1643c8d6bba827c43f328"],["tags/Shell/index.html","553dfd5d6e58e6fa0e699aae85695e64"],["tags/Slick/index.html","fa4bfd2a49ec07ee42c7504e8fa1aef7"],["tags/SonarQube/index.html","57091be9efea4ab3e2df3b4c1f48a152"],["tags/Thinking/index.html","78d07b192a19a9570a7fb3a7ab7b4574"],["tags/Threejs/index.html","b689c3edbaaa78b4e4de36343bde0d52"],["tags/Tools/index.html","2063e1c3226c74380019b53d04a22af2"],["tags/Tools/page/2/index.html","2a127fdb7886b88cfc161de9184e0299"],["tags/Transition/index.html","3b3913cd0993edf888c9759d0442708f"],["tags/TypeScript/index.html","e2e664471a20d844a6ea618df4d2e123"],["tags/Underline/index.html","329a7a5f62dd20ef6afd8db80e509a69"],["tags/WinJS/index.html","4491e440259e59847e0a7eeb3baec864"],["tags/axios/index.html","213638fe8563bfecf49a11c7b6db0bb6"],["tags/element/index.html","792a94e94f78000924a30a16d888debd"],["tags/express/index.html","ff24087b22304605ec8ea1a404cfb974"],["tags/github/index.html","44cd701708077eafcafed1d3586effd0"],["tags/index.html","87c8aa1acc13f8c0a98863a49087f291"],["tags/jQuery/index.html","fa9489300f966da113789add4e3698b3"],["tags/vue/index.html","0dfebadc6a671a3e60711f1bc717953c"],["tags/web/index.html","99ef25fef2c023e0691599a843d8f742"],["tags/websocket/index.html","9cddcba5f90ad53759163b97226eff1e"],["tags/weixin/index.html","0c312af8ca5f11a607cd6e713750f0db"],["tags/分布式/index.html","0bc2062192f6a05cf69e6f8a1eb3fc00"]];
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







