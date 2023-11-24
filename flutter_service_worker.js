'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart.js": "f66c7ff5fb80e246088d512badd88e83",
"version.json": "59e5f7a34314d6de6dc58d427c3d160a",
"assets/src/images/LABlog_Letter_Cropped.png": "17e6ff9d42d1ee70107a0c37e5d62701",
"assets/src/images/LABlog_figure-removebg-preview.png": "431d2fa6e6998a237d6bea97c9287ae4",
"assets/src/images/LABlog_figure__1_-removebg-preview.png": "bb08614355da1b1fa913b0680dfd4ce5",
"assets/src/images/LABlog_letter-removebg-preview.png": "37b889c347d209daeb614e1ea2e41a30",
"assets/src/images/LABlog_letter__1_-removebg-preview.png": "b9f993527f4b9d81aac711910c91cf72",
"assets/src/fonts/SourceCodePro/SourceCodePro-Italic-VariableFont_wght.ttf": "59b5238c0c1acf946ebea93fc3862987",
"assets/src/fonts/SourceCodePro/SourceCodePro-VariableFont_wght.ttf": "2eabf19db936c3a7603eaa08dce63e6b",
"assets/src/fonts/MinecraftFont/Minecraft.ttf": "d7b98c450349bef0631c7229b804a5c7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_tabler_icons/assets/fonts/tabler-icons.ttf": "dfd590717cfa36219dfb77a1392ad058",
"assets/fonts/MaterialIcons-Regular.otf": "d1948c18558789467b6a6dede4f1f390",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.json": "ee84fedfc22d61ca6871a9cfecdc1f2c",
"assets/NOTICES": "86768be4b73584d917e513b4f91a5afa",
"assets/AssetManifest.bin": "5cec462294187f6b7574aac0404c3b55",
"assets/FontManifest.json": "eb111c7f3b7781ffa7a9830e4627154e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/android-icon-36x36.png": "75665be5b355cde91184ead8d7d41822",
"icons/android-icon-48x48.png": "7949f61ae235896d5676a14a7a2e2922",
"icons/android-icon-72x72.png": "af629981af9793dfe828c4c7f7abaa50",
"icons/android-icon-96x96.png": "1fe72be8b5ea836f790b04415c6e1639",
"icons/android-icon-144x144.png": "642582b7f7ad423edabfa707e1eabf09",
"icons/android-icon-192x192.png": "b9b92d50a43b6a1bcc4655bcdb43af06",
"icons/apple-icon.png": "797ffbfe24c502a082113dab9b8f44d1",
"icons/apple-icon-57x57.png": "49ee82c0337e94993cff8b95406ae48d",
"icons/apple-icon-60x60.png": "889148c94650ebba1c2dab27f3fd968a",
"icons/apple-icon-72x72.png": "af629981af9793dfe828c4c7f7abaa50",
"icons/apple-icon-76x76.png": "457f89b6d4a9c563abdb444c7f7936a1",
"icons/apple-icon-114x114.png": "3b00835fbd4a569f8e618707f1f53e89",
"icons/apple-icon-120x120.png": "d04df9dca6fb674005eaaf21f4345802",
"icons/apple-icon-144x144.png": "642582b7f7ad423edabfa707e1eabf09",
"icons/apple-icon-152x152.png": "06245adb65db914f246d384353315e15",
"icons/apple-icon-180x180.png": "24172737afed8c42e0cb7cb16d044930",
"icons/apple-icon-precomposed.png": "797ffbfe24c502a082113dab9b8f44d1",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon.ico": "af9110d31e45b9d180ac4d7313769d40",
"icons/favicon-16x16.png": "bc062fe7f725eb9a3d43f3e2a5d4e29c",
"icons/favicon-32x32.png": "04bb56a254e8f3888d0a48eb909c1410",
"icons/favicon-96x96.png": "1fe72be8b5ea836f790b04415c6e1639",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-70x70.png": "1b086fb7e0d00ae8e67d337b8fa79b76",
"icons/ms-icon-144x144.png": "642582b7f7ad423edabfa707e1eabf09",
"icons/ms-icon-150x150.png": "288321dc6a9818b74f6d1896670ddb74",
"icons/ms-icon-310x310.png": "a8d76679e9b157340e167e1d1fe6d78a",
"index.html": "655332504187a8e2a345b7efedd51ac1",
"/": "655332504187a8e2a345b7efedd51ac1",
"manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
".git/hooks/applypatch-msg.sample": "4e33b997d7d5d5274c56bbf61f0c0bf9",
".git/hooks/commit-msg.sample": "89cb67435d2c1b9503e32d599d72713c",
".git/hooks/post-update.sample": "be48e56d8b9f9108aa4ecb32dd12d435",
".git/hooks/pre-applypatch.sample": "1f6a74774ee63312b4ad8a8c6ec7f2e8",
".git/hooks/pre-commit.sample": "3ba41bb5b6fe126be0c04c17ceb564ff",
".git/hooks/pre-merge-commit.sample": "f9d3ac247a941cf41ceb86048c699cfe",
".git/hooks/pre-push.sample": "a5a56d58c7133331b00b520ea5548074",
".git/hooks/pre-receive.sample": "c5e60ee055ef7b920a10b2871b1790a2",
".git/hooks/push-to-checkout.sample": "d8204d74ffd9ca215d1687eaca1e9e5b",
".git/hooks/sendemail-validate.sample": "c4c26785acacb2553117cf802723d09f",
".git/hooks/update.sample": "edce28be0c66a0a19729dc76f8143916",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-rebase.sample": "0d4f0a0a63c6a1cbbf0a8b410b9e3c59",
".git/hooks/prepare-commit-msg.sample": "529551eb02ce07d5a84df03a8361e155",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/release": "711ed5209ea4154ad7ef333e44c0d96c",
".git/refs/remotes/origin/release": "711ed5209ea4154ad7ef333e44c0d96c",
".git/objects/3f/ca02490daf34cfca1b4238c9535153bec6dbd6": "088e9cb92524b4ea9b6906bd1f99c726",
".git/objects/94/e5e2d5d75eedf109411d8e8d08f4341f8923dd": "f08aa88c7512ad1555e1dcd80b10d1cb",
".git/objects/67/9b78f70a75b4a0b6a65042d44d6889577e217b": "3e8f760e8b7ac8c091e3b223e647b7c8",
".git/objects/6c/f88bc73f820c2dafd8ad3f2fd03fdc0670615c": "88fe3bdce28847a4ff73cb72caffbb9f",
".git/objects/6c/6050b6e476b18f9dfc7c7c08ecc9788541af65": "61f68edf63b5a43b11710eabccd1864e",
".git/objects/6c/60aad13bdca9aaa58d077e6af4393ded9018fc": "ffb3b040c3e042842c04739d74db16bb",
".git/objects/29/4220cde8d11a77acacc2d314bcdd75f370795c": "ee194ee375935342ac068ff4730a7ee6",
".git/objects/11/54335ee14c2e977e688f073aedb24cbb27a13c": "b44855e8441443cb07619dd57bac9294",
".git/objects/11/a633b450d449ea55b27521bf28ada261711efe": "f5b0e65575d2e6b5085d53a9dc92d189",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/63/d8b7816f7bcbb01bdaff8bc35ba4b7ed8a24f8": "744925e7d0e37f18defedf420dab1d9e",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/d3/678bc35316604a415650ee8587048bd1982cba": "91985a2be818308e514e22df33c55e27",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/19/bb671271090bc15a568aeba896d29685f05bbc": "0c63f7288630c85b8e4cbf9203b69c16",
".git/objects/15/179b0c50fee50e94e6404674ba1f31bb9e71d4": "bfdce5d8485da62215ece97d0cba762c",
".git/objects/2e/587ac0e7881f02a9b00f30312d832aaef5cc9b": "f41694e460e08da00cbb0086eaf079ae",
".git/objects/f2/10a73805159ab48c4bc833da592a5af9db4a92": "5f742568adef26f750d45ca455903b25",
".git/objects/c6/7ae59dc4aec7ca54bac031251bfc8f7bfe0ae7": "8f2670beea76999c45df5cdcc88ec855",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/de/484d0220e68a7547d8b5b4d14890287c5f9263": "9724f17c5d678c693d4462a66995eb80",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/9f53e53268ac9cbc9c0a09898bcaf8f46d26a1": "334ebd1a3ef3b113b9679b29255f5f03",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/57/052034f6e5fc0ed21354a0c808d9e4bbf606c1": "812b28a3465991e8afbddafc46b86caa",
".git/objects/32/e3b4bc7717570251a0ee40bad7820f114cea52": "5d20d206478cef7a049ff83eb9676bd6",
".git/objects/2f/0b1afb67fc43dcb159be50f856237e8067b936": "cc101b6ad5b21e47c414edec6af92e29",
".git/objects/3d/a465a035222f01455a05e8fad9f8bb3fcd9f46": "7c156778a7d5f86231ffb6e9db4205a0",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/a2/c24bab61a21795e03752039d0b1a285ce561d9": "6545b856050de11307bce6793e87f06a",
".git/objects/fe/d3b2fb4262fcc3ef6ab16897228354070b6876": "bd011c92ce5c850f6cc263b4198d1c0a",
".git/objects/f8/2c057217b1cd8027949cebc58207da9872e5f7": "05367c893946042b66d216ef9918e98c",
".git/objects/f8/394fb99207399705bb0e65782f5d5d482aff79": "38a5c29eb8021d6cb0053f5f41c324a6",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/ec/bb404a3884bca3c64ae9d813a80c19327c0ac7": "0ca4408e735ec033a7e911048b9b4abf",
".git/objects/ec/95dec58cc515f3f4dc770ada0bf4ca4bbad759": "7d1a35ef3f9af15d0bf4add1707537a9",
".git/objects/3b/55e418652dbbbe6b4ec1d69cef37dd0659de7b": "6e28aa84b76860009d698a5896bb0a6b",
".git/objects/36/416b1b768cd4454cbd2cf8c4b3ed1bb649856a": "3eca5cd5b7412128338a22a5b34eaebd",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/4a/c2bf5e891bc32e4682ae3d721ded07482cd4b3": "a7ec91993e0f9abde6791b9a6ff2b1c9",
".git/HEAD": "dfebbe193e255e26c1b45fa445375b01",
".git/index": "e43789dc6d07e2ccf46bc99cba697fa2",
".git/COMMIT_EDITMSG": "d2cee30012ec8f743a92e6a2f7d0b2d7",
".git/logs/HEAD": "142d4b24c22edf7fd0ce45566f7cf8b0",
".git/logs/refs/heads/release": "142d4b24c22edf7fd0ce45566f7cf8b0",
".git/logs/refs/remotes/origin/release": "7a1dabbb8c41fda47d888adf47ed4ef3",
".git/config": "9525d6cde85d436e37ef16aba9b95812",
"android-icon-36x36.png": "75665be5b355cde91184ead8d7d41822",
"android-icon-48x48.png": "7949f61ae235896d5676a14a7a2e2922",
"android-icon-72x72.png": "af629981af9793dfe828c4c7f7abaa50",
"android-icon-96x96.png": "1fe72be8b5ea836f790b04415c6e1639",
"android-icon-144x144.png": "642582b7f7ad423edabfa707e1eabf09",
"android-icon-192x192.png": "b9b92d50a43b6a1bcc4655bcdb43af06",
"apple-icon.png": "797ffbfe24c502a082113dab9b8f44d1",
"apple-icon-57x57.png": "49ee82c0337e94993cff8b95406ae48d",
"apple-icon-60x60.png": "889148c94650ebba1c2dab27f3fd968a",
"apple-icon-72x72.png": "af629981af9793dfe828c4c7f7abaa50",
"apple-icon-76x76.png": "457f89b6d4a9c563abdb444c7f7936a1",
"apple-icon-114x114.png": "3b00835fbd4a569f8e618707f1f53e89",
"apple-icon-120x120.png": "d04df9dca6fb674005eaaf21f4345802",
"apple-icon-144x144.png": "642582b7f7ad423edabfa707e1eabf09",
"apple-icon-152x152.png": "06245adb65db914f246d384353315e15",
"apple-icon-180x180.png": "24172737afed8c42e0cb7cb16d044930",
"apple-icon-precomposed.png": "797ffbfe24c502a082113dab9b8f44d1",
"browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"favicon.ico": "af9110d31e45b9d180ac4d7313769d40",
"favicon-16x16.png": "bc062fe7f725eb9a3d43f3e2a5d4e29c",
"favicon-32x32.png": "04bb56a254e8f3888d0a48eb909c1410",
"favicon-96x96.png": "1fe72be8b5ea836f790b04415c6e1639",
"ms-icon-70x70.png": "1b086fb7e0d00ae8e67d337b8fa79b76",
"ms-icon-144x144.png": "642582b7f7ad423edabfa707e1eabf09",
"ms-icon-150x150.png": "288321dc6a9818b74f6d1896670ddb74",
"ms-icon-310x310.png": "a8d76679e9b157340e167e1d1fe6d78a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
