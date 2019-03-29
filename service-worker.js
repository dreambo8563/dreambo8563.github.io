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

var precacheConfig = [["/2015/12/18/An-Overview-of-JavaScript-Promises/index.html","6620f924ece48b8a32a6c0cb7a31ee60"],["/2015/12/18/Angular-First-page/index.html","51702818e4d737deca0d7dc50d5940d4"],["/2015/12/18/Automatic-focus/index.html","f9cb936d952f46ce03772fc244cf0294"],["/2015/12/18/Bind-Method/index.html","d214652d795f810dc7251334be1a820d"],["/2015/12/18/Express-app-get/index.html","9290263cd46dcb28f93297b7486246cc"],["/2015/12/18/FE-Grid-参考线/index.html","f9dd9042aea4df8bd483962332350991"],["/2015/12/18/Gulp-For-Sass/index.html","8530070117c06fdec2e9fcecebf59eb3"],["/2015/12/18/Gulp-Liveload-Nodemon/index.html","a993fe0d788c0aab2aa6437c1ebec88c"],["/2015/12/18/HTTP-Header-详解/index.html","15dd155049f5e6059d198527e9a8ece2"],["/2015/12/18/How-to-Upgrade-Node-js-via-NPM/index.html","6bdb017ea55fc62d0b5ce0cc7271df42"],["/2015/12/18/Jquery-Plugin-dotdotdot/index.html","22f0e22e1adc988fe653a515b354ff35"],["/2015/12/18/Node-js-url-parse/index.html","802ec7ce762081f0db3b2e9ad1e9946d"],["/2015/12/18/Ready-初认识/index.html","32c6012a1905a2419f27d6245eb759c7"],["/2015/12/18/TypeScript-on-Node/index.html","8a2f2cd1f9ffb4818a5886c8136fc337"],["/2015/12/18/WinJS-自定义控件-之-GameTag/index.html","28272a883e33185120bc7c854f113d5a"],["/2015/12/18/WinJS-自定义控件之-VItemContainer/index.html","e1440de73f2872d02eb801cb2e80bd22"],["/2015/12/18/WinJS自定义控件之-MsgBox/index.html","79c469d88dbcdc86dfe464d7d02e3022"],["/2015/12/18/app级全局数据的临时存储/index.html","790376f2a1e52d990c6c9bcdbd6af73e"],["/2015/12/18/backStack-导航历史/index.html","50c64eeeba8ee125e5b7daa6d57710bd"],["/2015/12/18/console-log/index.html","573a1b09938da92a94769056ffe2eba1"],["/2015/12/18/fs-readFile-跟踪解读/index.html","03fd5e1569528ab920ba3103b70f5067"],["/2015/12/18/hello-world/index.html","8dcbc7b52501e5072cf7d9c3aedd6e92"],["/2015/12/18/http-get-解读/index.html","4ca8a59e0a797fc61e2f2e01f838d64e"],["/2015/12/18/node-开发常用工具/index.html","7f968eb5617fb70110948444592b48f3"],["/2015/12/18/判断是否会-back回来的/index.html","3552d8b1f200d2db9a92ae54d3945d18"],["/2015/12/18/跳转间binding-错误/index.html","3e7f6124208624a323a4be10a87f524c"],["/2015/12/23/Angular2-minLenght/index.html","241e0b879617b394efe910ec8f84be18"],["/2015/12/28/Angular2-pipes-sortBy/index.html","8835feeb0769ceaf92d8a80f7ef71f16"],["/2015/12/28/Rxjs-初体验-with-angular2/index.html","f23772f685ead2e931674b0c30b26a7f"],["/2015/12/29/Angular2-Directive-rotate/index.html","04b160cf84604e50bb37614dce4786aa"],["/2015/12/29/Angular2-Simple-Route/index.html","5a17ed705128b106c109149a7f8be217"],["/2015/12/29/Angular2-outputs/index.html","862243807ac2c5056c3a1c2bf84e9c98"],["/2016/01/04/Angular2-hook-methods/index.html","03dd70df736266c4d0948175f9db2712"],["/2016/01/05/Angular2-host/index.html","de21ca99a2ebd50b2353ad27501274b1"],["/2016/01/06/Angular2-ngIf-源码解读/index.html","ab0695f4fc43b904b6a358e870047139"],["/2016/01/07/Angular2-复杂指令-ngError/index.html","5485c2dc833ba12618377ca63129dfcb"],["/2016/01/07/快速转换大量String-为DOM/index.html","b804542070363d8062caaef5284ed961"],["/2016/01/11/Angular2-DynamicComponentLoader-用法/index.html","5e9bfe9d38bce41926c93c6db59da558"],["/2016/01/11/Koa-中间件方式理解/index.html","5d4d32880a4e807abbed9caa5c77589b"],["/2016/01/19/Angular2-Directive-CheckboxControlValueAccessor/index.html","98d4b16edbc34a850b9bb0a2bb070793"],["/2016/01/19/Angular2-Directive-DefaultValueAccessor/index.html","c7512519ab944869d999ef799915a4ae"],["/2016/01/19/Angular2-Directive-NgClass/index.html","063a126d3cea9837ca4f1bae0845d214"],["/2016/01/19/Angular2-Directive-SelectControlValueAccessor/index.html","9b0a2410864b5e694fb9eacec330dad1"],["/2016/01/19/Angular2-Directive-validators/index.html","8545a938d6355f304827f05a5646d384"],["/2016/01/22/Angular2-Class-DirectiveMetadata/index.html","7c7d341d0e391f5154591d57da473b67"],["/2016/01/22/Angular2-Directive-NgControlGroup/index.html","fdee73033e0234b37febb970efd5baf3"],["/2016/01/22/Angular2-Directive-NgControlNames/index.html","889a40b886e674247e04374aa57b7c29"],["/2016/01/22/Angular2-Directive-RouterLink/index.html","016a55b109d42d671a7a618c6e4c67de"],["/2016/01/25/Angular2-Decorator-Component/index.html","b52a345e9d4fb3abf4d3d3436a046d73"],["/2016/01/25/Angular2-Directive-RouterOutlet/index.html","2866a674dcb56e2d79269c5dbf1669d8"],["/2016/01/26/Angular2-Class-AttributeMetadata/index.html","d8070fe788a7b17d2186fed09d622b18"],["/2016/01/26/Angular2-Class-DirectiveResolver/index.html","a7a643cdee9e7c66dd64cf4e73f07bde"],["/2016/01/26/Angular2-Class-UrlResolver/index.html","354b8a76f308be610c7e302b370301cd"],["/2016/01/26/Angular2-Class-XHR/index.html","0ad9d5fbeb9df48378811c8c8f0d94ef"],["/2016/01/27/Angular2-Class-AppViewManager_EmbeddedViewRef/index.html","71d77cdf7086b80649d7a6e4f296249f"],["/2016/01/27/Angular2-Class-ElementRef/index.html","aba423f7c1dd45b232f69947203a5399"],["/2016/01/28/Angular2-Class-EventEmitter/index.html","f1c1574b3e3a034c1fe4b7c71d79432b"],["/2016/01/28/Angular2-Class-HostBindingMetadata_HostListenerMetadata/index.html","35fa8b54793db257e36c35ace6f1b831"],["/2016/01/28/Angular2-Class-InjectMetadata/index.html","3b36bb3db21deb6e2438a22602719e45"],["/2016/01/29/Angular2-Class-AsyncRoute/index.html","d83dd82fd58a8a4558b4129174eb2ddf"],["/2016/01/29/Angular2-Class-LocationStrategy/index.html","a06d51defa74644d467c8fcafc92e9c4"],["/2016/01/29/Angular2-Class-NgZone/index.html","13f13c3ff28097ca4b923bdc72b41bfa"],["/2016/01/29/Angular2-Class-Request/index.html","a1dc88ac254b696b671935088bee0a8c"],["/2016/02/03/How-to-Make-body-100-Height/index.html","670096da9da82572ff83f84b0b8ea5a0"],["/2016/02/03/如何关联本地文件到github仓库/index.html","152552956c4fced11c924f5cf08a27ea"],["/2016/02/05/Singer-Page/index.html","7f231633f41911de2b1300882b45326f"],["/2016/02/06/Angular2-Components-articleItem/index.html","d41eb64c0195e772b7c76578cf94dfc9"],["/2016/02/15/Angular2-Components-shadedProgressBars/index.html","b6173c1e888b05e68d88d5da8082024c"],["/2016/02/16/Angular2-Components-inputEffects/index.html","cdf0c82efe2499b50aa981d3f21e764d"],["/2016/02/17/CSS3-Pushing-the-Limits-Advanced-Selectors/index.html","27835dae22a3c376de9791daa1bb32d5"],["/2016/02/17/CSS3-Pushing-the-Limits-New-Tools-for-Text/index.html","58977be060d693f6f6f825e87cf5d9bd"],["/2016/02/18/CSS3-Pushing-the-Limits-New-Tools-for-Backgrounds-and-Borders/index.html","915c23cb2ba0d06383b34e758156829a"],["/2016/02/19/CSS3-Pushing-the-Limits-CSS3-Filters/index.html","544781318ca593aa4624cd8fd88a9017"],["/2016/02/19/CSS3-Pushing-the-Limits-Introducing-CSS3-2D-Transforms/index.html","e6cf3f3e9479508a402ad339c8d0f05e"],["/2016/02/22/CSS-Float/index.html","1f39a4e7f35e18f73a18b4e493ce070f"],["/2016/02/22/CSS3-Pushing-the-Limits-A-New-Dimension-with-3D-Transforms/index.html","cb0ac473db1165b96410cc546a49678a"],["/2016/02/22/CSS3-Pushing-the-Limits-Bring-2D-Transforms-to-Life-with-Transitions/index.html","6ff542ea85a7c265811fe42b74d965db"],["/2016/02/22/CSS3-Pushing-the-Limits-Creating-a-Multicolumn-Layout/index.html","ecb869683c2277e3b9b975a91ce8afb8"],["/2016/02/22/CSS3-Pushing-the-Limits-Flexible-Box-Layout/index.html","e8d4436f9b08476586a6d9ab8d5fb9f2"],["/2016/02/22/CSS3-Pushing-the-Limits-Getting-Animated/index.html","4b8ff81cd18998a8b3b9b8645531c8aa"],["/2016/02/22/CSS3-Pushing-the-Limits-Getting-Creative-with-Pseudo-elements/index.html","7298c83d5ce25fbefe138f9bd516de7a"],["/2016/02/25/How-to-use-html-as-the-template-with-Node/index.html","f7b5855f5c910e96db0841747c785120"],["/2016/02/25/MongoDB-Read-Operations/index.html","d25040bdd8e2382b469fcf0d0a752458"],["/2016/02/25/MongoDB-Write-Operations/index.html","13bc9dde0688eb33cd94c734aa0d1fc3"],["/2016/03/11/CORS-node-js/index.html","95918f22207bed0cf513f04750bcad50"],["/2016/03/16/RxJS-Creating-Observables/index.html","fc78b89a30692b6b6086bcd05600bb8f"],["/2016/03/16/RxJS-基本概念/index.html","0d46bf41ced4d0e02d0c21571b423395"],["/2016/03/21/RxJS-请求数据更新流实例/index.html","f9548220c9233fab34496ea98ce30216"],["/2016/03/25/Rxjs-重构/index.html","e64997c01ba4cf1597f260c923ef8847"],["/2016/03/28/JSPM-TypeScript-React/index.html","f59f8bed89b65844dd8dda66d53e5564"],["/2016/03/28/React-React版的-ngFor/index.html","f2dd47b797293462f9b1d660c797e448"],["/2016/03/28/React-The-First-Try/index.html","34072c2a4d75aa6c799f2dcb67f6ef3a"],["/2016/03/29/How-JavaScript-Event-Delegation-Works/index.html","c6949d2fb864ddf34d278963de579ff5"],["/2016/03/29/React-State-状态管理/index.html","b30c4c72d4792b244c8ba73111d92fa5"],["/2016/03/29/React-简单的状态传递和事件处理/index.html","210d578c64d0f049a7048e468224f1c8"],["/2016/03/29/React-组建Namespace/index.html","156c9bb82dcbb64717d74223d8b973a4"],["/2016/03/31/NativeScript-经典view-model解析/index.html","dd5c5ddb07f17a54b2195c53959b21dc"],["/2016/04/06/NativeScript-App-LifeCycle/index.html","897730613e5386f62093f7f2addc3e2b"],["/2016/04/07/NativeScript-TabView/index.html","b46ff6d87508eb1708e54216a809bd54"],["/2016/04/11/NativeScript-Button/index.html","8d1e618be97e73be6cc2b6e25dd40e5b"],["/2016/04/11/NativeScript-Label/index.html","2428adbe2e3550e6014914bb5135f9bc"],["/2016/04/12/NativeScript-TextField/index.html","262b21ae34ebe91953b504b23195d8fe"],["/2016/04/13/NativeScript-SearchBar/index.html","fb0aa38e8e578e7331972eed59553447"],["/2016/04/13/NativeScript-Switch/index.html","ad2ace977934c1ccee6b291d74efe16e"],["/2016/04/15/NativeScript-ActivityIndicator/index.html","cb917da1b2ceebd68eadd684a18ac250"],["/2016/04/15/NativeScript-Progress/index.html","d38b98db891791856edb0c5288e67d20"],["/2016/04/19/NativeScript-Image/index.html","1b31d93eb657997456c93f99450e834f"],["/2016/04/19/NativeScript-ListPicker/index.html","0a093eb9ab92ea70f69d31e94fe69006"],["/2016/04/19/NativeScript-SegmentedBar/index.html","f5ead2ff3121a1ac7a7bf1c18eb8bc8b"],["/2016/04/19/NativeScript-TimePicker-DatePicker/index.html","78f92096afb33e0839db0c9b93989d2a"],["/2016/04/25/Angular2-DCL-inputs-outputs/index.html","ef0c147877c6b72afc7aabe51589d2f4"],["/2016/04/27/Redux-TodoList/index.html","bf07ff8e5ee4ef39fc485c2e5d4d157b"],["/2016/04/28/Redux-compose源码解析/index.html","3c58ebb4abb3b43eed7f8c771ab074cd"],["/2016/04/28/Redux-createStore源码解析/index.html","75231a7e3214d83e2da09eb079f412fb"],["/2016/04/29/Redux-applyMiddleware源码解析/index.html","76cf95f3d437cc0817b96f20d676e7f5"],["/2016/04/29/Redux-combineReducers源码解析/index.html","cb281291ee012658bdadd724769e3f83"],["/2016/05/03/React-Router-Configuration/index.html","c72fd89959f04fadf5649ee2705e3cdc"],["/2016/05/03/React-Router-Introduction/index.html","764c1ac41b891554946ae052630adf2c"],["/2016/05/04/React-Router-Dynamic-Routing/index.html","473e6a52361f1a743aaa9192e35fd77b"],["/2016/05/04/React-Router-Histories/index.html","0ab51f0a84c7e97cbe1e24b4c257fe33"],["/2016/05/04/React-Router-Index-Routes-and-Index-Links/index.html","4940c2fa987a8ed6f34ea40d7d47738d"],["/2016/05/04/React-Router-Route-Matching/index.html","c1d2884023676d521a135374e70d6f32"],["/2016/05/12/Rxjs-Operators-Count/index.html","c180f061c2c25fe8cb408f8807d18ff6"],["/2016/05/12/Rxjs-ngPagination/index.html","392e17e1c7aa5b63a0f957d8ba21f658"],["/2016/05/16/Rxjs-Operators-First/index.html","6e65603b9164cf9136f1cbb3575ae854"],["/2016/05/16/Rxjs-Operators-If/index.html","36f863f46d6bd610abf5878bfccfce62"],["/2016/05/16/Rxjs-Operators-Last/index.html","2902e931df89cc84fc64488ec4b84e45"],["/2016/05/16/Rxjs-Operators-Partition/index.html","7ee8d5018b7167e252611b59c83c6c8f"],["/2016/05/16/Rxjs-Operators-StartWith/index.html","48b1494d91d390413d8176e06802d514"],["/2016/05/17/Angular2-ComponentResolver/index.html","09c768172b9f4de60c2ef20120485730"],["/2016/05/17/Rxjs-Operators-CombineAll/index.html","ca3269c90f88f3a83b02aa847edbed95"],["/2016/05/17/Rxjs-Operators-CombineLatest/index.html","6bd3a119c381367405b2e438a72a3a9d"],["/2016/05/17/Rxjs-Operators-Concat/index.html","b0d1183044c1c67068b65bd80177e610"],["/2016/05/17/Rxjs-Operators-FindIndex/index.html","a9b05b0ccb62c328ed391f9860d32c23"],["/2016/05/17/Rxjs-Operators-Switch/index.html","6a4a782f8cd3e81767c8601ca1be7ecf"],["/2016/05/17/Rxjs-Operators-SwitchMap/index.html","4614a759ada43ab546ebc756f6918727"],["/2016/05/17/Rxjs-Operators-TakeLast/index.html","101f455252b16c3599c7c7f3596de050"],["/2016/05/18/Rxjs-Operators-ConcatAll/index.html","242b3155afc02577b96eb42214693c7b"],["/2016/05/18/Rxjs-Operators-ConcatMap/index.html","afec726c3bc685d15bbd00cc9a9af923"],["/2016/05/18/Rxjs-Operators-Defer/index.html","6e2db0fcfd2600dd83d563e6f931c2c9"],["/2016/05/18/Rxjs-Operators-Delay/index.html","edb36bfcc8af826e69e4b20b4db40cd6"],["/2016/05/18/Rxjs-Operators-DelayWhen/index.html","22ae9af5d12848d36807aafcc07156b5"],["/2016/05/18/Rxjs-Operators-MergeAll/index.html","72c73f0d9a7f2e7a982c4476a175d7f5"],["/2016/05/18/Rxjs-Operators-MergeMap/index.html","579118a421689a90c8f46103126d84b9"],["/2016/05/19/Rxjs-Observable-Cold-To-Hot/index.html","447508b7c8b48a4fb5ad032fa780c666"],["/2016/05/19/Rxjs-Operators-Reduce/index.html","406a15d8dc4ca563b82970b1044178cd"],["/2016/05/19/Rxjs-Operators-Scan/index.html","c4c0f964f107b02be1d1174a16f78972"],["/2016/05/26/Rxjs-Operators-WithLatestFrom/index.html","0eebb294d6cb1219c7cc1eb67a4357f6"],["/2016/05/31/Angular2-ionic2-First/index.html","5850694b5613ea801c82449766a368f7"],["/2016/06/14/Rxjs-Operators-forEach/index.html","d0ed0bf2c0141211dd29c7eb3e3d3c55"],["/2016/06/16/循环事件注册/index.html","fed32063982f092aa73b7b7a4d599c6a"],["/2016/07/08/JS-modules/index.html","c475e96459989a8ad3a6a554db2f60cb"],["/2016/07/08/Responsive-Embeds/index.html","c15a50849c8d66bbcefb9ceb9cd318b9"],["/2016/08/10/SCSS-Helper/index.html","e53d3da8d6bddb20badca30dd18b704d"],["/2016/08/26/Almost-complete-guide-to-flexbox-without-flexbox/index.html","6ed7b996a391ec4ff751592799a583e9"],["/2016/08/26/Cmder_Git/index.html","ae1318faff0284c97a6d621f3d4e0ca2"],["/2016/08/26/github-免输入密码/index.html","ba02480813b63f9b4d6ba7c26e8e4497"],["/2016/09/20/从boilerplate中学到的redux里replaceReducer的按需使用/index.html","8dbd4246fc5955638569451a31996136"],["/2016/09/20/浅谈RSK-Mobx-SSR整个改进过程/index.html","6661fd90f144e4ad3c24eed39b450655"],["/2016/11/17/RabbitMQ初体验/index.html","4eae8c2e5f07dbaa0d230e2f5f83ec9b"],["/2016/11/18/basic-redis/index.html","b43a4332803f3a184b945284d938bfe2"],["/2017/02/19/akka_stream_Mat/index.html","e15d53fe35c6eda65c662f9126e8f705"],["/2017/02/19/akka_stream_basic/index.html","0ea5adca077990f35a5b1c8b55ca2dcb"],["/2017/02/19/play_http_ ActionFunction/index.html","dd7f155af3162cf6e309272d2e89d4a1"],["/2017/02/19/scala/index.html","069673e297e4fc6cece9bf42364efa34"],["/2017/02/19/scala_Option_collect/index.html","30463112c857d5fc71a78f70226ef3cf"],["/2017/02/19/scala_curry/index.html","5cd38d2614b0fbb592e5c09179c5e952"],["/2017/02/19/scala_pattern_match_@/index.html","c2fc4fe85e6a3d6d9a246d23be0405f2"],["/2017/02/19/scala_seq/index.html","2e6ba66f0bfdaafedf7ed93c034fe6c6"],["/2017/03/12/第一个npm包/index.html","ef3bead63d982cb53b5223c486944d24"],["/2017/03/14/how-to-install-postgres-on-Mac/index.html","fa488f3a478b459fb84bd07d47faafcc"],["/2017/03/18/Success-vs-Success/index.html","2806fbdf963aaf8117aecddc62a70306"],["/2017/03/22/first-try-with-slick/index.html","0136319e76bd120e4da5fa9b5ef6f42e"],["/2017/03/23/git-remote-branch-删除有依然可见/index.html","65784f6e4d65395ef4efcbe5d0184fd6"],["/2017/03/28/slick-条件插入/index.html","8ceaf3b26548221ee8a12ce740d2a54f"],["/2017/03/28/slick-返回值包含多个相关数据/index.html","73a79795d9ad7a3288c3b8fd78015741"],["/2017/03/29/Akka-打包部署/index.html","e39affdf99e6974f84511ae24b040cae"],["/2017/04/01/重新思考react-返璞归真/index.html","71c0f4ba873a750f188cb8480daf898a"],["/2017/04/12/RN-Navigator/index.html","1188d55aab8982b8f533eb71477274e1"],["/2017/04/18/RN-router-flux/index.html","a869bb8c4437cb4d57b0d8ba733f3724"],["/2017/04/20/SW初探/index.html","95b55222166a72af6b1e1b40a6424fe9"],["/2017/04/27/Actor-Actor-API/index.html","f6a6bd220baa45865eb98818780439ac"],["/2017/04/27/Actor-Creating-Actors/index.html","a8707c6bb75e3585d9dd8a56e5a552d5"],["/2017/04/28/Actor-Send-Messages/index.html","0667646b314cbd243580a88276771f85"],["/2017/05/02/Actor-Become-Unbecome/index.html","eb3b1f257060c4e48c81530d41652fed"],["/2017/05/02/Actor-Receive-timeout/index.html","bf34d166146dcb7f45edf599259f5281"],["/2017/05/02/Actor-Stopping-actors/index.html","915f18963372adc6d49a49626a1bbc80"],["/2017/05/03/Fault-Tolerance/index.html","f3c093c1aa37bf67249c646d4a980d6d"],["/2017/05/08/Nginx-部署SPA/index.html","d16b07b67a474ba6ccf554fed269f3f0"],["/2017/05/10/Actor-Routing/index.html","8f22ab1fcd680948ff6a72d7e69138b4"],["/2017/05/11/Actor-FSM/index.html","531add32ec89f78a326e5432f90f4d20"],["/2017/06/12/Functor-定义/index.html","e33df30de8c79b62ccd7b57c8cd5acab"],["/2017/07/28/docker-compose-nodejs个人开发环境/index.html","0883660ce61ddd9aa52c8b820d3c2d6a"],["/2017/07/28/docker-nodejs/index.html","e4532489215148985124f81e0c50512a"],["/2017/09/05/Nginx-proxy/index.html","0caf49d70cc6af90720ccafc4541a0fd"],["/2017/11/07/golang-ls/index.html","83b6b64eb73e8462b5dde652fa5a0b0c"],["/2017/11/08/golang-ssh-tool/index.html","38fdc10d3cbade5418629fa3875b30d1"],["/2017/11/09/golang-simple-JWT/index.html","855639917f0666ceca9245de44ffd3cf"],["/2017/11/13/golang-youdao-dict/index.html","b6575c913fc9c3e6e908c10319a9e7cc"],["/2017/11/20/golang-Counting-Duplicates/index.html","108737a5c4004e65272cd68c9625c826"],["/2017/11/20/golang-grpc/index.html","39df51b00b5dfff0b28e0925ba3bcb71"],["/2017/11/21/Algorithm-希尔排序/index.html","956438d0e42d07baaceeb52c138b43c7"],["/2017/11/21/Algorithm-插入排序/index.html","327e37e44ecbb2a411aceee91bce26bf"],["/2017/11/21/Algorithm-选择排序/index.html","41ce6962b01aec89077fc0b1b9c63b28"],["/2017/11/22/Algorithm-无序链表/index.html","bab34d32023f23fa82e31737e16d7f35"],["/2017/11/23/Algorithm-二分查找/index.html","fc6c66543496f136cb2d246154ab160d"],["/2017/11/24/Algorithm-使用深度优先搜索查找图中的路径/index.html","20d6961d87c7940c4e424f791b0f6ecf"],["/2017/11/24/reflexgrid-任性的flexbox布局方案/index.html","a648c8023baa34379f472dbbc7029311"],["/2017/11/24/字体抽取工具-Fontmin/index.html","5ce807ef5dadeeb8ab7781c345860b3d"],["/2017/12/20/golang-gin-demo解析/index.html","7a7ffd07a2f056f92190977392b124a2"],["/2017/12/25/不一样的拥抱变化/index.html","475dbc796b3600f1ca4778519cb0e8d6"],["/2018/03/08/NodeJS-分层思考/index.html","23619baa1a06d38737a57f5d68d82bc4"],["/2018/03/23/golang-fileExists/index.html","25126fa8e6a55971b4da0c9d774ed77e"],["/2018/04/24/elementUI-组件解读/index.html","228e2f9d393b295f398bb882e37f17bc"],["/2018/05/10/ElasticSearch-create-index/index.html","f9228fbc72176a92261779eeae02d218"],["/2018/05/10/Element-mixin-emitter/index.html","7bc3e00699171a4c21ed07e8923e9008"],["/2018/05/20/golang-base64简单解读/index.html","eff08655187acfd14b88832f40a7cdcf"],["/2018/05/23/vue-自制bus/index.html","a428501d604908a50f31d550f91ab446"],["/2018/05/25/golang-websocket-AcceptKey计算/index.html","2c05b6f62f1a3b5f49afb2fd425e428c"],["/2018/05/29/ElasticSearch-初试Query-DSL/index.html","0b38ec61324b919329a07f8340c5dafb"],["/2018/06/15/WebRTC视频聊天/index.html","99ca6be6b26f1b764db7a15c34266dc4"],["/2018/06/15/微信小程序/index.html","b30e5ae2e7c23274e8da82e8e8ea4094"],["/2018/06/21/axios和ios9那点破事/index.html","2740a6dbad27bc72a351b3ee7f94f296"],["/2018/06/28/golang-goroutine-pool源码解读/index.html","7a5eed2632f1f7bcde6cf6a0b23525ee"],["/2018/07/06/Element-OSS-upload/index.html","3c50b5b66f617076fd358111dc628cae"],["/2018/07/09/golang-nats/index.html","591a9c3df632d83beaa1253c245486d3"],["/2018/07/10/Three-3D文字/index.html","01a878137c8cf535db465f750ab94f24"],["/2018/07/13/Jenkins-FE-CI-CD/index.html","1991c96e8069ca468de75c4fc589c2c2"],["/2018/07/19/Jest-VUE-UT/index.html","e543b391fe8fe560739e4c85bd8c1ce4"],["/2018/07/23/重复代码扫码-JSCPD/index.html","1f08be7f88f09d305a53013b7720a9a4"],["/2018/07/25/圈复杂度衡量/index.html","c091df5a4002e3342dd5829eb6603555"],["/2018/08/07/Newton-s-method/index.html","f3547b562db94ebad70082826e1f0eb3"],["/2018/08/08/golang-compare-struct-slice-map/index.html","69bb70aef3b7e02868cdc0d41e70608b"],["/2018/08/15/Docker-Sentry/index.html","2ca4c875836d9e92ed4a462556fd85f3"],["/2018/08/17/Sentry-node-express/index.html","29c9a1a9e180f0827b09f3a6ac06bb39"],["/2018/08/28/前端质量思考/index.html","9cd6569927ed0cab54a076a2e0511435"],["/2018/08/30/VSC-TAL-FE-ElementUI-Snippets/index.html","e809837eb6fee4c4bd92429ea78c5684"],["/2018/08/30/VSC-TAL-FE-Helper/index.html","98933d73fbf4f8aa98f55fe63c3be31c"],["/2018/09/04/Docker-SonarQube搭建/index.html","da279c4385ee1b42c0485b8e73f636d8"],["/2018/09/11/golang-uuidv4/index.html","51b9b9ca0f1e900908bb9339959c8960"],["/2018/09/12/golang-uuidv1/index.html","d4a34c82a233519af5470af5122005f5"],["/2018/09/14/Etcd-分布式配置中心/index.html","b6d3d641b89f317b6bfe4c4c2711a052"],["/2018/09/18/Etcd-分布式配置中心2-runtime切换配置/index.html","35634b539ceab2eaffe9b3b0a5b47f2d"],["/2018/09/25/CSS-Collections-Buttons-1/index.html","25a0bac79a0a37a21301e0d467f8ec5d"],["/2018/09/25/CSS-Collections-Buttons-2/index.html","eedc27b3abee40c9f9298b920367be05"],["/2018/09/26/CSS-Collections-Buttons-3/index.html","638022cb9bdf4919b18529d83bd98fdb"],["/2018/09/26/CSS-Collections-Buttons-4/index.html","f923b2c72438f430f2e3069ac421a9bb"],["/2018/10/10/关于opener的安全小技巧/index.html","99b9a86e8d3597d155c8462c08763bb4"],["/2018/10/30/前端独立部署-最小docker化实践/index.html","90977b0a587ac9d1af35064d3c125074"],["/2018/12/05/golang-Trace链路跟踪实践/index.html","9a7bf45ad6ab7c2c2d89f85633e7696e"],["/2018/12/12/golang-grpc-Client-BL/index.html","08915b1fea233e3e69b48feac66b9f04"],["/2018/12/18/Makefile简单脚本应用/index.html","06480d8cc5aeb1beae9f422daac6d5d7"],["/2018/12/29/2018年度总结/index.html","556084943772d3f00341b5bfd03b1fe9"],["/2019/01/18/Element-偷偷引用内部方法/index.html","1cebfb768bd6f4ef76ce26a3730b304e"],["/2019/01/22/玩耍github/index.html","cba6852af15b4b00d184bc3546df0fee"],["/2019/03/12/Vue-vue-device-detector/index.html","9d96754f4107275252c279fabd4d34fb"],["/2019/03/12/Vue-vue-storage-watcher/index.html","be0b5deb11b04cd6dbe96b2b19e9a696"],["/2019/03/19/Vue-vue-lazy-calc/index.html","eaf50df990fc59222b1c3514f47ff4c2"],["/2019/03/29/redis-resp/index.html","64c333c6bc9bf7e36ca26878c68fba60"],["/VEN/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/VEN/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/VEN/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/VEN/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/VEN/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/VEN/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/VEN/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/VEN/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/VEN/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/VEN/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/VEN/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/VEN/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/VEN/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/VEN/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/VEN/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/VEN/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/VEN/fastclick/bower.json","50ebebf43ccc629c814281e60fd049f0"],["/VEN/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/VEN/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/VEN/font-awesome/bower.json","188dd1a7583ffab4da32757242993f36"],["/VEN/font-awesome/css/font-awesome.css","8e12157da5fc90094ae4113ba110456b"],["/VEN/font-awesome/css/font-awesome.min.css","0831cba6a670e405168b84aa20798347"],["/VEN/font-awesome/fonts/fontawesome-webfont.svg","76a4f23c6be74fd309e0d0fd2c27a5de"],["/VEN/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/VEN/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/VEN/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/VEN/jquery_lazyload/bower.json","5f8449c87f33671904615bb63d8283cf"],["/VEN/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/VEN/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/VEN/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/VEN/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/VEN/velocity/bower.json","76d1e61a2f857128f671328183bcc9aa"],["/VEN/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/VEN/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/VEN/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/VEN/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/about/index.html","9ef0f10e411ff11c6852f1cc39314e1c"],["/archives/2015/12/index.html","09a87ad3aa235b3d2efba5a060b1ab51"],["/archives/2015/index.html","791492359dd14fc502f7fd32e12b55ef"],["/archives/2016/01/index.html","f989cf4f346c61116b31e89c20234e80"],["/archives/2016/02/index.html","b01ee24cbb24ba9531177f3fe479800b"],["/archives/2016/03/index.html","b8c6176cb607a438e73e846ad50641bd"],["/archives/2016/04/index.html","10dbb02288d35c25ec46a3f639cc719c"],["/archives/2016/05/index.html","e15a65aede3c5d2637e9abdbcec7463e"],["/archives/2016/06/index.html","54949f71aa7f89d275a6ba186264646e"],["/archives/2016/07/index.html","a6e63596319032179be3b7366bc3bfdc"],["/archives/2016/08/index.html","c5180bd36485ab7bda788749d980a417"],["/archives/2016/09/index.html","f85e9ff8814ba9caeb55cb641ec93298"],["/archives/2016/11/index.html","a4a54d765b0792f56af9448cba699762"],["/archives/2016/index.html","19253a8b4eab3efdae341ee45a53df5a"],["/archives/2017/02/index.html","6a26c162f96264b2deb8c32abe97a4ee"],["/archives/2017/03/index.html","611256def09f431a9913eaec5dc4f39f"],["/archives/2017/04/index.html","77f8fb61f37e35fa9c22788827d0b8ae"],["/archives/2017/05/index.html","f1200cb5761916e7298df21e84d22582"],["/archives/2017/06/index.html","002c33ed68a52678f283be6d8adc1d55"],["/archives/2017/07/index.html","88da512ad4efc85fdd2343a74e4d7606"],["/archives/2017/09/index.html","e69bd91ef0a235e1ab5c5fab42be5d59"],["/archives/2017/11/index.html","8ff1c2bbc531efb19a8f54592a51d242"],["/archives/2017/12/index.html","9fdc5dc9bf5f6002d2f78e62962e1499"],["/archives/2017/index.html","5673e0f405d8af4c690b2f6c46839449"],["/archives/2018/03/index.html","ff6daffb5d73bffe0f49b39c3129478f"],["/archives/2018/04/index.html","7f9eadbd17bf3c84e33a00755b99daba"],["/archives/2018/05/index.html","44665a628a773eab2619dec0e9063bc6"],["/archives/2018/06/index.html","44ad11324f83e957dd521968afdddc83"],["/archives/2018/07/index.html","6fc90c286792caf23ddd67380af15ff0"],["/archives/2018/08/index.html","4f801a6d7ed2b51e9b21506367d4da68"],["/archives/2018/09/index.html","cbf51f41b4420936b490138e6bf32fb3"],["/archives/2018/10/index.html","72611a9f8fe1683aae679055abe6adfd"],["/archives/2018/12/index.html","90fbda3b58024b1985510ef4beee0cff"],["/archives/2018/index.html","536ca6e16b3eb186e76cc4b8ef3edd3c"],["/archives/2019/01/index.html","47e99c0801b1ed046377702751c47588"],["/archives/2019/03/index.html","61bd6527aab02a90b72f3d29606bab0e"],["/archives/2019/index.html","fae6f2f0da09d7f14b4c1599d80caea6"],["/archives/index.html","c2547d3d9cea40e0892d1963d5789e2e"],["/atom.xml","c52f8cbd68a7f3d79d6469db595b87c3"],["/categories/Algorithm/index.html","aa42202b4a47ca55ae301d1f9c5578ab"],["/categories/Angular2/Ionic2/index.html","005474730c6aaa0276b169db2de9ec37"],["/categories/Angular2/index.html","ffc7c3dede1519292fefad307e0d8782"],["/categories/Angular2/page/2/index.html","75e84720658e9539c566fd51428f009a"],["/categories/Angular2/page/3/index.html","dbfba90b5e5ecaacc831dd01d623156a"],["/categories/Angular2/page/4/index.html","6a14b2264c483813de08a5739f9692d5"],["/categories/CSS/index.html","9847cd27b86177e13ec7f5ab950ae9bf"],["/categories/CSS/page/2/index.html","23a7e4fb94627897742ee646e5ab53bf"],["/categories/CSS/page/3/index.html","c56e128f04fa08d1845a4ccaaf508a6f"],["/categories/Docker/index.html","27907383510169dc6e467f310e9fc6a4"],["/categories/ElasticSearch/index.html","b549334d3b2f10f4897bd57176000d3f"],["/categories/Golang/index.html","84546c81ce2d2a17454171c007334414"],["/categories/Golang/page/2/index.html","3f9947cc5693914d64ccd18a4e83565c"],["/categories/Golang/分布式/index.html","4808e825dee64c5aac972e627cb6de4f"],["/categories/HTTP/index.html","3a09dc29fe11e2b135896f5f98aeabe0"],["/categories/JS/WinJS/index.html","b8f82a2157061d9fdca20cbfb8289ac0"],["/categories/JS/index.html","51c2bdc929205ff768167eae7e15d551"],["/categories/JS/page/2/index.html","cfd0e77b9c7c1b9f60688cc09f6ee0ae"],["/categories/Jenkins/index.html","8e1171dd32e0df2960ca2a3be74ca506"],["/categories/MongoDB/index.html","b65cbadf0e92acb455c07b665a979eb3"],["/categories/NativeScript/index.html","7abc688e9cbd5ed1d2e2369e36ae818e"],["/categories/NativeScript/page/2/index.html","0f52628847b38e485036bf7ad582e429"],["/categories/Nginx/index.html","5b49e501b1de48d05c237c86f4288c7f"],["/categories/Node/index.html","89fdb7adc269a1c47fc328ca09f4ec5a"],["/categories/Node/page/2/index.html","ab85233a6206999b115fcc5b8e1938da"],["/categories/PM/index.html","fb7f6fe642bbe629ccfbe9d1b655ede9"],["/categories/React/React-Native/index.html","1c1e4a8c545637bfdae4440efc3662ce"],["/categories/React/React-Router/index.html","e4a06a8cdec8e84fa7d7e3f6492d184c"],["/categories/React/Redux/index.html","fc5c2a2246c4916c4ae3e025b8bd1869"],["/categories/React/index.html","1185167db20ceca5bf261b0b5d147cbf"],["/categories/React/page/2/index.html","af2abdfc370c064c4d7df03d3cb0ca5f"],["/categories/React/page/3/index.html","72b774d80ec4a83791f28536fedf720f"],["/categories/RxJS/index.html","3b58e84053e227612d4f112917c7e139"],["/categories/RxJS/page/2/index.html","073383505b27b8c10f9978486a2fa78c"],["/categories/RxJS/page/3/index.html","a722c99dd12050c8c331850e942cf394"],["/categories/Scala/Akka/index.html","02196b77c79dcc1b936447f96ee7e6fd"],["/categories/Scala/Akka/page/2/index.html","2ea3e3c590e242bdf476dfb64341456e"],["/categories/Scala/Play/index.html","1e84e7a56a007a350b566af1c865b0b2"],["/categories/Scala/Slick/index.html","1c90461849b660f579fadfef62f6d97d"],["/categories/Scala/index.html","c1812e44c6a39067654702685bb70d4b"],["/categories/Scala/page/2/index.html","e85623e9e62be3ecb81729d5f1775d76"],["/categories/Scala/page/3/index.html","1de4df639a2b4ffae819d4e28035b168"],["/categories/Shell/index.html","23910ed5d4676dd7c0de86719a759f81"],["/categories/Thinking/index.html","e39227e6d74ab0c395497a6de3465a15"],["/categories/Threejs/index.html","db4f300064082bb0075d04231ee2fc2b"],["/categories/Tools/index.html","2ff6b5b28c5bd35bc07831555e3d4e3f"],["/categories/Tools/page/2/index.html","03c4860c3fd6c62cee0329f3c5badbbf"],["/categories/TypeScript/index.html","d21a46cca933ac90b96bc4c1d94efc69"],["/categories/axios/iOS/index.html","a3c80d032d28dade1df6a91b0d3136e0"],["/categories/axios/index.html","ad3cf548b84a29d61ad0b38b9b660d8e"],["/categories/github/index.html","6d8242632a4bd958c72b5cd892ed51d4"],["/categories/index.html","fecc0dbd7d7b5be31301701ca71f400a"],["/categories/redis/index.html","a3946d8486d63742e0c5f00f13815361"],["/categories/vue/index.html","ffbea0d4a5245e4be4118dbcaa24c1e9"],["/categories/web/index.html","3eed317995d617c80a58698c3ca790cb"],["/categories/weixin/index.html","9e8f849f53f8948da5782e606ccdf1d5"],["/css/main.css","869c31d43caa7b6e87c3d3f3a94ea40f"],["/images/avatar.png","65b0d841b964e5b8a4a4a971b09b6fa2"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/icons/icon-128x128.png","2095f6ffe68ca2a4653414b14a52fe58"],["/images/icons/icon-144x144.png","20ba1ea38addd3952345b36ac3cecb63"],["/images/icons/icon-152x152.png","558da096eb6bf41d52ef984f3e3ff3d8"],["/images/icons/icon-192x192.png","d60f50b599b41af403ffcabe8d5fda1e"],["/images/icons/icon-384x384.png","0622ab0164714b79448aeee0a910c46f"],["/images/icons/icon-512x512.png","d309e2dfb0657349ec8ca467e74d4c9d"],["/images/icons/icon-72x72.png","7ea05775922505f7d0cea1b895afa8ff"],["/images/icons/icon-96x96.png","418957182b60b9a8805e014c35311bea"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","daf035d259aa9d9ea6d1a0c5c2042774"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/bootstrap.js","73c38465c33a6b7d49820f12d4b6cd09"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/motion.js","5e50cb0717c2be4c43ecd948b3abca59"],["/js/src/post-details.js","a64526b288db34b054ebd5f22c061754"],["/js/src/schemes/pisces.js","95b6f118d6fdf262f540d3a9144fd79a"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","c9dbca6eabd5a792c0fbac43c7ef96a2"],["/manifest.json","6c58983f081c5bf9fe37d578eb01b761"],["/page/10/index.html","b406e673b0f98d4e2ad22da52c51db71"],["/page/11/index.html","75d61627205d581ba115da668089b00e"],["/page/12/index.html","7a0fcc30a76c1bcb5de5db455c1e9c5b"],["/page/13/index.html","ff3450d149fb5bb3819e11a06a6d56c7"],["/page/14/index.html","84ad0fb9890d62204a44512bad22d3fc"],["/page/15/index.html","6712b158352144fa5cd1891192c2d432"],["/page/16/index.html","b9f07d1ace2598d562c9779371971f28"],["/page/17/index.html","d9b41e910752ea2ac4cbcd6f690e7bc3"],["/page/18/index.html","8185447047dab9fc5f845522c9789685"],["/page/19/index.html","04a4646fc6be019859c7a2382331fcd6"],["/page/2/index.html","d58c3500754555b2b9d266a372904169"],["/page/20/index.html","fc5c78e7f72b8238599108a96aa1c078"],["/page/21/index.html","d5a32669f5e365b5f6035de03a2086b8"],["/page/22/index.html","b3e8663fca7b659717dd4b92b412055a"],["/page/23/index.html","e509f95e30752801da06c383c0f054c1"],["/page/24/index.html","ae070fb096ac692e66cb2a502a4af6ca"],["/page/25/index.html","6c2b1a4fe53cc3ee49627099598e9464"],["/page/26/index.html","eab1e1688a7c7fe84ae90391bc4d1a6e"],["/page/3/index.html","81bb820129846e1769ca735c6899edcb"],["/page/4/index.html","91fb5d8d6c631ae6854e94e17e9a8345"],["/page/5/index.html","953f094a0395bc5fcbb94b24691f5c64"],["/page/6/index.html","11fffd3da13ae0c70245afd3b9a4bccc"],["/page/7/index.html","af983ee8f3ac4b52a2a6b9ac004d61bb"],["/page/8/index.html","4a2f97a9a9b9659f8156068f983f5d0c"],["/page/9/index.html","db5bea30bc061fc867168ef1370e00cb"],["/tags/Akka/index.html","94ae96c378049fc456c710d9431c0cb4"],["/tags/Akka/page/2/index.html","6cf1b1de8b13c7719b1f3e1eb4070628"],["/tags/Algorithm/index.html","695e0288bf06aafdfcb9df834f88f6e7"],["/tags/Angular/index.html","9e57cc336ee17aed4a3b98ed2a0b8897"],["/tags/Angular2/index.html","b70c211f18b8b58f13560167761b6181"],["/tags/Angular2/page/2/index.html","5e1e7d04bc5b206d9154e8fd87c28855"],["/tags/Angular2/page/3/index.html","57dc74518a748ae5860ad159eabad801"],["/tags/Angular2/page/4/index.html","40c75c08aaac6e60dec07555e95e8c7a"],["/tags/Angular2/page/5/index.html","af466ec59ef84cb69d9eb88d300bcd6a"],["/tags/Bind/index.html","4c2f487c5bd35c4f2da75a072fbfd26b"],["/tags/Body/index.html","b7c684b44a84645c6345ac2dd66c9239"],["/tags/Buttons/index.html","9e297577c0c5f76b61f751af23d4c720"],["/tags/CORS-Node/index.html","d6f74fe2afd49edd074548816648557d"],["/tags/CSS/index.html","a75863e5a6bf5d9c5f6825f53f145962"],["/tags/CSS/page/2/index.html","03c3534c6c07bbf8bf83fd420f2bf656"],["/tags/CSS3/index.html","6b39f4507605f059dca95ec210f0f96c"],["/tags/CSS3/page/2/index.html","77cfecd4978152a74812269acb833e14"],["/tags/Cache/index.html","4a807d6bef0fac871f3cd7ebad065757"],["/tags/Class/index.html","a1c56d59552d16bb7f2315d6265971cd"],["/tags/Class/page/2/index.html","499611a2ed80fca8d27e5df3b8934460"],["/tags/Componnents/index.html","edb87c25065a9e57e10503da7a482c99"],["/tags/DOM/index.html","bfd3a204873898ed32308cacdc86d203"],["/tags/Decorator/index.html","0c7872c1cfe6bcb208a28149d0a1febe"],["/tags/Directives/index.html","a72e48feff51fd483fd182f56c038bf5"],["/tags/Directives/page/2/index.html","8437fa89032dbdbba59c46ff5df69895"],["/tags/Docker/index.html","55918eb77807e2adc2689cd862cc21a7"],["/tags/DynamicComponentLoader/index.html","d54652cacebe8d0059cbecc109e5b369"],["/tags/ElasticSearch/index.html","f8f51b1cab8ded753926337734b6934d"],["/tags/Etcd/index.html","821cde9bc287b853f56e6246697b674a"],["/tags/Events/index.html","4660ba1b35a04a35e95cea263585ed73"],["/tags/FP/index.html","1f431ec0bb7128b921ad2816fe991018"],["/tags/Focus/index.html","2ba6fef0dc1f5216f8ab59825705e09b"],["/tags/Git/index.html","44b76fae8073baa35092f8dfaf4fe61f"],["/tags/Golang/index.html","3432b0133de4288b83f0ba3a70105b3a"],["/tags/Golang/page/2/index.html","824b6832b950f8ea46ec1411b932965c"],["/tags/Golang/page/3/index.html","a797157594c4da2b9c1568546f22d4e5"],["/tags/Gradient/index.html","1cd2bf33d42ded8da76eb2a990f88070"],["/tags/Gulp/index.html","d2d430b8090d46871e404220010fc676"],["/tags/HTML/index.html","64f3f1842b53940b5dcd61ee82b94ddd"],["/tags/HTTP/index.html","15cff06e2994a4ddf6feab395ee78ee4"],["/tags/Host/index.html","e988d2fbd58683a332867b0f6a12f96c"],["/tags/Hover/index.html","85cae314daba367a7f917f68376b9ed2"],["/tags/Ionic2/index.html","ec6f95758a248c92dccdf2032e47d779"],["/tags/JS/index.html","4b5c925d07cfeac6c740071b7219b4d0"],["/tags/Jenkins/index.html","a3b51efe76f8b514e07da4a8ef9fa3b0"],["/tags/Jest/index.html","1c4ec4991f21b93625ff368ebe27dae7"],["/tags/Koa/index.html","4481c64a83c909ca159498e4d5efdd25"],["/tags/MQ/index.html","d28b7eaf0735cde5c6fe6f960ab1a0f8"],["/tags/Makefile/index.html","afc1672da436a194f38c9697a2d9fdff"],["/tags/Mobx/index.html","2792b7efafa18bd2919376cc30b0f666"],["/tags/MongoDB/index.html","712173d98082f1b524ab34e34f41cb6a"],["/tags/NPM/index.html","a3b94b5e72c2af0454c5c647aae3bcf7"],["/tags/NativeScript/index.html","d14f7dd8f23551df577de8ec681747fd"],["/tags/NativeScript/page/2/index.html","735e9bc8be910b6d91c51810fad71fbb"],["/tags/Nats/index.html","7db2e3aaeeb3c5e8520b1c578da83f67"],["/tags/Nginx/index.html","da256e65be986362068d5e0b65f85c36"],["/tags/Node-js/index.html","5cdb7a800305cf195a1cd81c87592c73"],["/tags/Node/index.html","30d45156e7298de4de335d9948d5354d"],["/tags/Outputs/index.html","51c783eab1384a6e97cd5bf3d98e1740"],["/tags/PM/index.html","2c032d19365f571a7c910e49dcabd808"],["/tags/Parser/index.html","fa1efdc619dc7ca006c10858c0a7ef49"],["/tags/Pipes/index.html","d08233c69171b911dfc60e1301f1ad98"],["/tags/Play/index.html","6b4a8f3b00d0621813db7d4e75747b96"],["/tags/Postgres/index.html","84fbb602885e7534646cfd25e955279a"],["/tags/Promise/index.html","54b23fb5c445b38011eb38503979a8f0"],["/tags/React-Native/index.html","f2bb0be1d354ec6233a5af463f607d8e"],["/tags/React-Router/index.html","42f002b33fa6f169e8adca74c988b6b9"],["/tags/React/index.html","9af284b7ed290aa5a2719d3fcd08512c"],["/tags/React/page/2/index.html","94cebe90d7b9e69660a74a21e48fbbd2"],["/tags/React/page/3/index.html","7bc0c3c6c8d14ddb16bd79c7a08be641"],["/tags/Redis/index.html","c77840f26fdfad79bd820d6ec68c3db5"],["/tags/Redux/index.html","763c954940eb0c379bb11ec99d4e9112"],["/tags/Route/index.html","cd49b6b558328cba7b7300e79bcb60c8"],["/tags/RxJS/index.html","d8a9c50df626a112d084f8e6cb1d4ae6"],["/tags/RxJS/page/2/index.html","e89f39359007b3adc8b4bcd7e8aab22c"],["/tags/RxJS/page/3/index.html","f49b6416bbbdf10a6a94ab0c96dbe352"],["/tags/SCSS/index.html","8bf342361bf163e7fa1193d03e0aeea7"],["/tags/SSR/index.html","04aede62ef9cf71df7107384dbdd0de1"],["/tags/Sass/index.html","b15a8bcfe27509734c030ea6de605192"],["/tags/Scala/index.html","a9cb7d74270169e75d18c1247e5ea3ab"],["/tags/Scala/page/2/index.html","0e79627870eed06882b1cf0c51c8fde1"],["/tags/Scala/page/3/index.html","da0a0bd3c4c194c53f03181ac355d1b5"],["/tags/Security/index.html","f64c2fb667c596ac263a108541735442"],["/tags/Sentry/index.html","5e4ccbb6d1d3aeb53551b1d5054576ea"],["/tags/Shell/index.html","4dff4107556f48afe78e6b293b382b0c"],["/tags/Slick/index.html","1cfb034c1888f5987a2d44d38f96ca33"],["/tags/SonarQube/index.html","e6c77d3d7dd9692528cb43a9646cbc03"],["/tags/Thinking/index.html","a91645cb2f7493cd63bca06be21c5280"],["/tags/Threejs/index.html","e1d37db51544ea752c6db09f05b4cbf1"],["/tags/Tools/index.html","6a86f3c2acfa460b7e79fb0f744e28ed"],["/tags/Tools/page/2/index.html","e19d5d1e2b775c05e2e6f73e8f081a67"],["/tags/Transition/index.html","918c13baa4deb785a4d1682fa7d5e55e"],["/tags/TypeScript/index.html","ee427628f2c361c9bf6c6325efc359cc"],["/tags/Underline/index.html","25410e03782387865d5d4abe52119d1a"],["/tags/WinJS/index.html","c1f14cde182417f780d3999baa1f4517"],["/tags/axios/index.html","362c0e1158f5aad5bb13094b3b5bfb59"],["/tags/element/index.html","d8a581fafd3285fe7a197521e4c91aed"],["/tags/express/index.html","dcf1e33e95bd65dfe1f89fe9f389144f"],["/tags/github/index.html","c5c2300e73dee09e93f2e2aad00e96e8"],["/tags/index.html","6d12912feffc37df7a675e804e631564"],["/tags/jQuery/index.html","dac414035acbd6f7df0a460009d77088"],["/tags/vue/index.html","172444a00d83bf0d5f6a0956a53a9aeb"],["/tags/web/index.html","c8570937efaafcd0a7afd0d5c4a189e0"],["/tags/websocket/index.html","b974d9c3a72c98abe3f1929fae81c3be"],["/tags/weixin/index.html","2833f378a2b1ded5ec75f8789fa4f311"],["/tags/分布式/index.html","bb1102b0731c488c59dec84f29653d82"]];
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







