'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "74878913e33d5634df1fefdc4adbb080",
".git/config": "02f5dda98feb75b7b0e29b843b6898a8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a0a4c830489c9655eb9f03e802e1256e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "15791fb5731e1cd5862d6a4f0278fe6c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4aec396363ad03391ed56246b289d3f9",
".git/logs/refs/heads/main": "4725cb89af1984570d3f311f314d2f7e",
".git/logs/refs/remotes/origin/main": "8ce0c047f192b4fb7cfece21aeafa8b9",
".git/objects/00/5bbd26da8f5e6dbf3743b1deda3456b5b0a84e": "ac0b3f271276757a855db6e01d27401e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/09/f80adcc670c68a7439b41e26cd603c8bb4b124": "d6330712f6c07972c63b4a9844c31302",
".git/objects/0d/2b0f59c78d3a4f357e9383b7d353535dc94956": "df94076eb84bc13dfe265f68910cd24d",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/11/5b4fb1eb959362fdcee346b3f9add5cbca909a": "47495e96d3d68f1e797575f1396661fe",
".git/objects/14/9c88a1962ec1111c22131fac6b959415e173c0": "f7943ec29e0538d9986ed3c2a929a52a",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/5d1faafd42c0e44ac45b8b4c85a26e5b47ec65": "b4dbbf2c85cad3a659ab0851ebeafdc4",
".git/objects/1b/96582dbdd698764c4375100ceb55fd70b2f84a": "e7e30765c12c3a95e5b9509855cde5f2",
".git/objects/1e/35bd884d0575bd387eac7c7a363122c4e1bac9": "6fe260721db26fba4d69cf389de3660e",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/f2d6bb0c923d62cb01c41e8b111e4016870542": "8543f028fce36232743bce313c19a42b",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/7051581fe608c129049ec6a2c690ae42e83451": "084922783948cc56261a275698a3946d",
".git/objects/21/acb90066cb7a42f74bee853987f5b235c7e0a6": "d0febbda89ab5af046edd18affada112",
".git/objects/22/1bcea16393238e00615c2f7b73a6e244589615": "adac9e8f4550dbf65b35f479e74dafe0",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/28/c99979c7cf13dd38e5b9f1cda2466ef4615dea": "0ee8820f45021c1831dc7482fee57e93",
".git/objects/2a/3ce8bd2846b206553ed15a885829ec8f034a05": "ae4ee9ae65ace81d735e731d54b84ade",
".git/objects/2d/307eedaecff5b907ea4f8aedc02a6970c67282": "32d51110329e0f65f92979e0c5695b64",
".git/objects/2d/57e1ae957adf345773c8b5df78ebb35cc79e5b": "13787d263b67219cfa71cf3fe3ec258c",
".git/objects/31/2a5a9ac9c55fc09ecc72156e59c7c1e28d30ed": "b2cfbd4612f7833c388e5b3ed458b091",
".git/objects/3c/10cc964f3bad4ed918b7b336993c23910471a9": "ed8b6af5516dbff745c96a0f9952881e",
".git/objects/3e/b1333fadfcdd77e6a5b1ee55cdc60592f6d6ef": "dbb8043975754c7c7de60effa2d276e8",
".git/objects/3f/37946e9c1886583a8c5b191735539d1296b551": "6483b3a285aa8026456d97cf5fb9679e",
".git/objects/3f/5fd1d5efa7c2e4cea66e015887eaec243a0ea5": "55f417c9eb15a8e2a0a465e08091e951",
".git/objects/40/a54c4bb755014bf7c71bacdd6f7f92f5a6ce02": "ab8618ed355437a3cacab7e291997825",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/43/254799f1521bfa3885d2f536ecac3aceda6ab2": "84eb618b7a283fe7995df6e6bb2741a6",
".git/objects/43/d12be283d47023bb3249fa80626f3abd383597": "427aff447f3fdb04c8f9ddbc38363587",
".git/objects/44/d2e1ccabe37a0f6b6c6cb1f262ebcb0c6172cd": "1fc0c882f03ac39e8e72755c9eae3d76",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/76d4b76f95e43a2bade587f391b85abe2d46b2": "950d972fa6295de2c54c8a392239e0b4",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/54f4689adbd677a923815281dc6c46cc45cdf8": "422428cd89ae53a4bb05f95a2bf53aaf",
".git/objects/4e/13d9c6adcdf5219717259f92979c82375413ec": "add4b1c70d19c536a6c06554b959abc6",
".git/objects/4e/f8840da2da2762472d170dca6d57905c758675": "ca1bc49e0fc1a89e8f0e27b4f48bebd0",
".git/objects/55/08f60df8eb681e1063ae2273997ac8605c9296": "f1ea2cb93b9a38e9f57638df86dcfbe4",
".git/objects/57/8deef513bd3f74be31de76fe3e8891efb7ab44": "5b15e08ad4db6ed9f68d987ffed6f136",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/78ad6ed330c76f469fff8e04a60709c663cfe3": "fe1067ec1e80e6f87860f61a5bdadfea",
".git/objects/59/8a674a817c4cd29cd4d8c2c548c0e05105ab0d": "ca3ec0b446fbc4507f797930d573d0f4",
".git/objects/59/934e711fddc828cb3a239b6e8451bc4f28c8bc": "ef71daf6601793e7715e537a84c2176b",
".git/objects/59/b463813737d61d0bc4c854b499b192d56d0dc0": "8546b0257df279d99ff2acdc6f1299ee",
".git/objects/5a/fdbc5e4f001de4a9a84a97d436b1b2a8d63dff": "2cb29a2c3c438802e6ce4fa1bf698f5c",
".git/objects/5c/54549fe6d687c4f16cde9a25feb19d13dda394": "bdd1529aa6ed82585b35e2555f3c65cb",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/64/276054ee31729a9859607a5136715a55132d38": "9b772c81739bc0a3b02146faeb98bf0b",
".git/objects/67/3d1406eb639a2a67803d926043421933d408fc": "6820004aa0781954c01dafd79b0071b5",
".git/objects/69/871739555e4799fe7ed53f874c74c187dc3f3f": "64bf1a63a257a0ba9bece26d62e9417e",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6a/eeaaa3e2a5b1d6d7220ed8b5fb9111792a8e88": "c24e0414495937ec31416cea16fdf343",
".git/objects/6c/eaa749d0b984f90449c9050d4bdf322a80beb0": "2c275df24c23f3a9f5875a60a7e02980",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/75/d7f5999367ced30f68a7e6e9c72717175e3acc": "f199e91dda0f4de01622553584b680c7",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/76/5b9e7a1131ab3431778f8714c51d0227ac86b9": "5f11aab5cd095c4e6d8eed296743bada",
".git/objects/7a/ec0b11ae643deb2ea515a5dabfa6fdc00237f6": "53a34325025af2a1d5b82037f01fe882",
".git/objects/7c/7bff49520bb27f98de18c826b335c09922358b": "7320a325f4473acb8eda74eb7f585bbe",
".git/objects/7e/e1ef4f742be9db1ee81f507cd82bf68be8a968": "635508f3be74c559fdfe9c48cbfda308",
".git/objects/83/089f2777f124506ef55b4fba64b80b847fa364": "287f6ad787c60244a7e1a8ab1e0baff9",
".git/objects/83/89f7874e0ffb205d6cc5b19f793d836777e4b3": "9b367328f96f11b4297115db1d1d8539",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/21c93989cfd3dcf34153959eb6e63ef89a7d71": "55fa4cd86918f5201155315d1a689b77",
".git/objects/87/c410d1ee6d7f63a41a134ad27e1afda63d7217": "4f724443e0e77a88d4c4342e509442de",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/ff4fdd0ba4e32f21b707a7dadfa2df4b5b9bb5": "df13697fc5ff09fdf8e9c85a809255e0",
".git/objects/89/43d8bdf001a17816b7c800e4b4be62113bc6dc": "3bcd1258c4d97662d2fbf4c4dc4b86e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/a28721c0cd699073bb0ac1ab8143de589b6705": "6276d082921b918844862afc24bf4cc6",
".git/objects/8d/f3899e07e04a5859f69ad485b939f45031caad": "392ca4845d5854eb87b5c38d6a4018ab",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/91/d64ff2e3a7b5c3290f977e5c191bf5e492dd24": "067697102a2a2ee915eca08e72868274",
".git/objects/92/eab450609b7dc5d076ddf6c8416de8209373e0": "9b3d4cb7f5916a87f36a18b466ea7ac4",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/408c17e2984c13d2a1b14c9796e4129a725799": "c4d2749aba60f43197f6ce7cc55aee19",
".git/objects/97/696506bc7c429f30aabe126173eae074ba88c3": "dc543fa0a54c940eec0d9ff651855ff3",
".git/objects/97/7b026d55156840da5d9a8b18c17d870ade7c5d": "7a3570f49d250c1daf068f2cf4b73cd5",
".git/objects/a5/daffac987e001134f66d09c4254e8a95d1cf87": "f1b8b132dacb11873b32c7c1033da20e",
".git/objects/a7/0f789d9f4405a0d4802cb3785dc42665ae6ff2": "17b6ef667fe289ea7a8b245d0b8dbcf3",
".git/objects/a7/c94459f666aa76656c4c250676c767f64cd328": "3f00fcf6b232907e2cc5cad9896d850b",
".git/objects/aa/106d76110aae4abc2a52a8334942e18ea438b5": "20dc06ab841eb00c7318f0b456fe97e0",
".git/objects/aa/d2a63bbbdeac1bc86dc917529b890fe346cf18": "cf35b65053c8bc8a414c265056cb14c6",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/b3/59f818dd92dd22041dc0fe74eb0756e91aae1d": "86c6e5121bfc188f75cb59832d749bcc",
".git/objects/b3/7d2e1b648214fc1b4fdf1aaa354f3f1b2ff485": "db8e2182177d310980dfb111e2b58eae",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/6563d06400ce8cb7fe29b4e0d1d1359a4666f0": "d6b374c760add75094ac75eda5c2a5d2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/62be4cab5f72369b08ce815a54dae2fdc2f669": "ba3cbba4374cc8841734feee3b3e39c6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/ad671a6d91dc707b9fb2b3eccd28af261a9f8c": "f568a20e2afd26f5f7aa69804d76a351",
".git/objects/c1/63a659020100efb30e05ed2e6e8b136989f8b8": "b3016371e46f0a1d4ee8690916f9a5a6",
".git/objects/c3/6d6e4020ae82cda2391c39a2d641ee97fafd5d": "e08cbdb105e944fffa3e3d4e56c654b0",
".git/objects/c3/b5f554f8df09bc66c43fba9706c3150a8a6734": "9406ec558fba843c04513a869faa82d4",
".git/objects/c8/839c46ef647c4ae0dc7653b607328ec2e80930": "fd7d1f8613106921e66b0bb75c02c6fe",
".git/objects/c9/b00074911e706d7082dafb95edeeb585b81a71": "1acffe929f95978252735672107cc238",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/c37eccf51ab383cb8901b27852bb72759cbff1": "b4d082947288328472245f61bd2cd888",
".git/objects/cd/8ce005a0cf395e3adf20d9324a4b9569dc1045": "e88ef9eac5a7518d7246bcd7f69a6553",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d6/22d33b73290e82eb72b835854b1f38f774caaf": "c1aabcdca17a7bc7a618407eedd0792e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/9df36cde8e07f98597cd875ddc1246d1569b5b": "88ca139e84437cc754c06283301f2f49",
".git/objects/dc/713151342eace07db95b8a518f43b91d2cca42": "1c55d94291fddfd0bd0a2b8372fb3c9d",
".git/objects/df/8d0f56091fffaf232a77fea91f81a55a3753d3": "36cbb7985499a590b48c912159cad575",
".git/objects/df/e4850ed54e03213dd06c80551a4a40f98ec47f": "9089440a6d9e1655dcadddd22df58635",
".git/objects/e2/637d8204c5dd5ec7806d90addf9375989992fe": "d47194a06a7b30ad4626432aaa3250be",
".git/objects/e2/f9ff5743626b6c982464ed7b4c837cbc825bd7": "6e7c695f57a7a1386fc6798a5606c6a4",
".git/objects/e3/cb866a1972327bd57481af16fa353efdddf03b": "6eee09d49c12c19824ea82912f25ab3b",
".git/objects/e4/c31b52ea91d63091dfd93c964a38a1534c7041": "014a1657df48aa2d3f6c81a3c5df2896",
".git/objects/e5/5ac2ac9fe99af25d250758a97d467b98b5576c": "b04dd5f809e64dcbc6025437ba22874b",
".git/objects/e6/7a0d6970dc245bc15d92f724514cad08934d44": "ceebc92bfb21a8777679d67a90e5216d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/fb3850f9ea55da38f57301ec0be72f11ee7847": "f29e2014d28931f56ae27013e6cba57c",
".git/objects/e8/ef1e200475103632520abd16e4085a7109aca7": "a896e51523f701d1c7e446ca14c4eaf2",
".git/objects/e9/131c59ffe155a05277624f206ea6db68d558f7": "b354c28f61110f259bbc27bb11110578",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/cde061d05941c0d86d718379067c7a8ba9a463": "fd69a9890258e6dd82f10558ff9f3974",
".git/objects/f0/252347328b53cbca109b3ebba1248f606410db": "bfd746e25da5ad4e51efba6ff630c9b6",
".git/objects/f1/971e33749f4750f9ad97369e9052d0b795dbdd": "c0bbcc1f041bcd453fdb45da8a9eeb9a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/cb3f38676730cd9b2bde64d05c543c0eb3fb7f": "e31c7c064bd69571eaafbdadbe1f268d",
".git/objects/f2/d1da0d59eca70b73a89f55b1ec42e37845eb56": "83186219e440c56ec5a16ede832efa32",
".git/objects/f4/f882d6a084faba2476e8fcd0722ac984f1ef4d": "099ba2149402e996ede07ddaeb87e29a",
".git/objects/f6/82012862e67f43ce8250488d986002419494a2": "baccd771b1236d95a55807cc7ef5557e",
".git/objects/fe/c56dd077ff1f5b087b43719785ebb0028c013c": "fe3e1f20c67efaf2e177ed7db615b973",
".git/ORIG_HEAD": "b46f0c6a744917442abf4f93f8cd8e94",
".git/refs/heads/main": "d966fcd67a69c928d6f2315b2ba793a0",
".git/refs/remotes/origin/main": "d966fcd67a69c928d6f2315b2ba793a0",
".git/tgitchangelist": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "50a492754e41955c541c7395544c1739",
"assets/NOTICES": "bab367f1a8e7df8f03dde38956c8f94a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "8f661df90d0bccbb00470b647a2e6f1b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "504d69756127831ce03f98c878f0c037",
"/": "504d69756127831ce03f98c878f0c037",
"main.dart.js": "857734eb422ad90a53b4ec55c3f1d590",
"manifest.json": "6a829aa242a01aa6cbd8a6caef9f591a",
"version.json": "33559e0d68183a80f343b312073a7540"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
