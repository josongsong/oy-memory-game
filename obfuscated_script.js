const a0_0x2659e9 = a0_0x5a3c;
(function (_0x40d3b8, _0x5386eb) {
    const _0x114752 = a0_0x5a3c, _0x204ae5 = _0x40d3b8();
    while (!![]) {
        try {
            const _0xfd9fd3 = -parseInt(_0x114752(0x137)) / 0x1 + -parseInt(_0x114752(0x11a)) / 0x2 * (-parseInt(_0x114752(0x12f)) / 0x3) + parseInt(_0x114752(0xca)) / 0x4 + -parseInt(_0x114752(0x9d)) / 0x5 * (-parseInt(_0x114752(0x110)) / 0x6) + parseInt(_0x114752(0x119)) / 0x7 * (-parseInt(_0x114752(0xcd)) / 0x8) + -parseInt(_0x114752(0xd9)) / 0x9 * (-parseInt(_0x114752(0xdf)) / 0xa) + -parseInt(_0x114752(0x99)) / 0xb;
            if (_0xfd9fd3 === _0x5386eb)
                break;
            else
                _0x204ae5['push'](_0x204ae5['shift']());
        } catch (_0x555df2) {
            _0x204ae5['push'](_0x204ae5['shift']());
        }
    }
}(a0_0x1977, 0xb3f7f));
const INITIAL_LIVES = 0x3, INITIAL_STAGE = 0x1, INITIAL_SEQUENCE_SPEED = 0x320, INITIAL_TIME_LIMIT = 0x1388, SHAKE_INTENSITY = 0.1, BGM_DEFAULT_VOLUME = 0x32, SFX_DEFAULT_VOLUME = 0x50;
let scene, camera, renderer, character, clock, waterParticles = [], birds = [], hotAirBalloons = [];
const canvasContainer = document[a0_0x2659e9(0x82)](a0_0x2659e9(0x149));
let mouse = new THREE[(a0_0x2659e9(0x106))]();
const keywords = {
        'ArrowUp': a0_0x2659e9(0x13d),
        'ArrowDown': a0_0x2659e9(0x13a),
        'ArrowLeft': '←\x20협업,소통',
        'ArrowRight': a0_0x2659e9(0x10a)
    }, arrowIcons = {
        'ArrowUp': '↑',
        'ArrowDown': '↓',
        'ArrowLeft': '←',
        'ArrowRight': '→'
    };
let gameState = 'START', sequence = [], playerInput = [], stage, lives, sequenceSpeed, timeLimit, timerInterval, shakeDuration = 0x0;
const stageDisplay = document[a0_0x2659e9(0x82)](a0_0x2659e9(0xba)), livesContainer = document[a0_0x2659e9(0x82)](a0_0x2659e9(0x10f)), messageBox = document[a0_0x2659e9(0x82)](a0_0x2659e9(0xe9)), startScreen = document[a0_0x2659e9(0x82)]('start-screen'), gameOverScreen = document[a0_0x2659e9(0x82)](a0_0x2659e9(0x7c)), startButton = document[a0_0x2659e9(0x82)](a0_0x2659e9(0x8b)), retryButton = document[a0_0x2659e9(0x82)](a0_0x2659e9(0x148)), timerContainer = document['getElementById'](a0_0x2659e9(0x12b)), timerBar = document[a0_0x2659e9(0x82)](a0_0x2659e9(0xe3)), progressContainer = document[a0_0x2659e9(0x82)]('progress-container'), flashOverlay = document[a0_0x2659e9(0x82)](a0_0x2659e9(0x131)), bgm = document[a0_0x2659e9(0x82)](a0_0x2659e9(0xb8)), bgmVolumeSlider = document[a0_0x2659e9(0x82)]('bgm-volume'), sfxVolumeSlider = document[a0_0x2659e9(0x82)](a0_0x2659e9(0x107));
let audioCtx, sfxVolume = SFX_DEFAULT_VOLUME / 0x64;
function init3D() {
    const _0xb4782c = a0_0x2659e9;
    scene = new THREE['Scene'](), scene[_0xb4782c(0x11b)] = new THREE[(_0xb4782c(0xc7))](0x87ceeb), scene[_0xb4782c(0x145)] = new THREE['Fog'](0x87ceeb, 0x14, 0x50), camera = new THREE[(_0xb4782c(0xc1))](0x4b, canvasContainer[_0xb4782c(0x9c)] / canvasContainer[_0xb4782c(0x11e)], 0.1, 0x3e8), camera[_0xb4782c(0x8f)][_0xb4782c(0xb5)](0x0, 0x4, 0x5), camera[_0xb4782c(0xf7)](0x0, 0.5, 0x0), renderer = new THREE[(_0xb4782c(0xde))]({ 'antialias': !![] }), renderer[_0xb4782c(0x8d)](canvasContainer[_0xb4782c(0x9c)], canvasContainer[_0xb4782c(0x11e)]), renderer[_0xb4782c(0xda)](window['devicePixelRatio']), renderer['shadowMap']['enabled'] = !![], canvasContainer['appendChild'](renderer[_0xb4782c(0xd2)]), clock = new THREE[(_0xb4782c(0xc3))]();
    const _0x16e4b3 = new THREE[(_0xb4782c(0x97))](0xffffff, 0.7);
    scene[_0xb4782c(0x89)](_0x16e4b3);
    const _0x4c5a0c = new THREE[(_0xb4782c(0xf4))](0xffffff, 0.8);
    _0x4c5a0c[_0xb4782c(0x8f)][_0xb4782c(0xb5)](0x5, 0xa, 7.5), _0x4c5a0c[_0xb4782c(0x122)] = !![], _0x4c5a0c[_0xb4782c(0xa0)][_0xb4782c(0x86)][_0xb4782c(0x9a)] = 0x800, _0x4c5a0c['shadow']['mapSize']['height'] = 0x800, scene[_0xb4782c(0x89)](_0x4c5a0c);
    const _0x301d3f = new THREE['PlaneGeometry'](0x64, 0x64), _0x4d97ff = new THREE['MeshStandardMaterial']({ 'color': 0x4caf50 }), _0x5b3e88 = new THREE['Mesh'](_0x301d3f, _0x4d97ff);
    _0x5b3e88['rotation']['x'] = -Math['PI'] / 0x2, _0x5b3e88['position']['y'] = -0.4, _0x5b3e88[_0xb4782c(0xe5)] = !![], scene[_0xb4782c(0x89)](_0x5b3e88), createFoliage(), createClouds(), createBirds(), createHotAirBalloons(), createCharacter(), setTimeout(() => {
        const _0x1bcd57 = _0xb4782c;
        gameState === _0x1bcd57(0xff) && startWalking();
    }, 0x3e8), animate();
}
function createHotAirBalloons() {
    const _0x8db000 = a0_0x2659e9;
    for (let _0x5b6052 = 0x0; _0x5b6052 < 0x8; _0x5b6052++) {
        const _0xbfbdd = new THREE[(_0x8db000(0x11c))](), _0x54d806 = new THREE[(_0x8db000(0x142))](1.5, 0x10, 0x10), _0x207f3f = new THREE['MeshStandardMaterial']({ 'color': new THREE[(_0x8db000(0xc7))](Math['random'](), Math[_0x8db000(0xb0)](), Math[_0x8db000(0xb0)]()) }), _0x3df2c6 = new THREE[(_0x8db000(0x147))](_0x54d806, _0x207f3f), _0x14674f = new THREE['BoxGeometry'](0.8, 0.6, 0.8), _0xcbf2a2 = new THREE['MeshStandardMaterial']({ 'color': 0x8b4513 }), _0x1eba3d = new THREE['Mesh'](_0x14674f, _0xcbf2a2);
        _0x1eba3d[_0x8db000(0x8f)]['y'] = -1.8, _0xbfbdd[_0x8db000(0x89)](_0x3df2c6), _0xbfbdd['add'](_0x1eba3d), _0xbfbdd[_0x8db000(0x8f)][_0x8db000(0xb5)]((Math[_0x8db000(0xb0)]() - 0.5) * 0x3c, Math['random']() * 0x8 + 0x5, (Math[_0x8db000(0xb0)]() - 0.5) * 0x28 - 0x19), scene[_0x8db000(0x89)](_0xbfbdd), hotAirBalloons[_0x8db000(0x113)](_0xbfbdd);
    }
}
function createFoliage() {
    const _0x29697e = a0_0x2659e9, _0xcde009 = [
            0xff69b4,
            0xffff00,
            0xffffff
        ], _0x1323c8 = new THREE[(_0x29697e(0x11c))](), _0x21e4f4 = new THREE[(_0x29697e(0xfb))](0.02, 0.02, 0.3, 0x5), _0x41d68f = new THREE[(_0x29697e(0x151))]({ 'color': 0x8000 });
    for (let _0x308547 = 0x0; _0x308547 < 0x12c; _0x308547++) {
        const _0x44ed4a = new THREE['Mesh'](_0x21e4f4, _0x41d68f), _0x4ebbf0 = (Math['random']() - 0.5) * 0x32, _0x2217d9 = (Math['random']() - 0.5) * 0x32;
        _0x44ed4a[_0x29697e(0x8f)][_0x29697e(0xb5)](_0x4ebbf0, -0.25, _0x2217d9), _0x44ed4a[_0x29697e(0x100)]['x'] = (Math[_0x29697e(0xb0)]() - 0.5) * 0.2, _0x44ed4a[_0x29697e(0x100)]['z'] = (Math[_0x29697e(0xb0)]() - 0.5) * 0.2, _0x1323c8[_0x29697e(0x89)](_0x44ed4a);
    }
    const _0x14d45e = new THREE[(_0x29697e(0xfb))](0.03, 0.03, 0.5, 0x5), _0x15ecc2 = new THREE[(_0x29697e(0x151))]({ 'color': 0x228b22 }), _0x4fef84 = new THREE[(_0x29697e(0x142))](0.1, 0x8, 0x8);
    for (let _0x5bbbfa = 0x0; _0x5bbbfa < 0x32; _0x5bbbfa++) {
        const _0x122b6d = new THREE[(_0x29697e(0x11c))](), _0x399deb = new THREE[(_0x29697e(0x147))](_0x14d45e, _0x15ecc2), _0x3d3573 = new THREE[(_0x29697e(0x151))]({ 'color': _0xcde009[Math[_0x29697e(0x14b)](Math[_0x29697e(0xb0)]() * _0xcde009['length'])] }), _0x41db0d = new THREE[(_0x29697e(0x147))](_0x4fef84, _0x3d3573);
        _0x41db0d['position']['y'] = 0.25, _0x122b6d[_0x29697e(0x89)](_0x399deb), _0x122b6d['add'](_0x41db0d);
        const _0x353dc8 = (Math[_0x29697e(0xb0)]() - 0.5) * 0x32, _0xe82f7b = (Math[_0x29697e(0xb0)]() - 0.5) * 0x32;
        _0x122b6d[_0x29697e(0x8f)]['set'](_0x353dc8, -0.15, _0xe82f7b), _0x1323c8[_0x29697e(0x89)](_0x122b6d);
    }
    scene[_0x29697e(0x89)](_0x1323c8);
}
function createClouds() {
    const _0x278002 = a0_0x2659e9, _0x37c710 = new THREE[(_0x278002(0x142))](0x1, 0x8, 0x8), _0x2374f5 = new THREE['MeshStandardMaterial']({
            'color': 0xffffff,
            'transparent': !![],
            'opacity': 0.8
        });
    for (let _0x279297 = 0x0; _0x279297 < 0xa; _0x279297++) {
        const _0x39ae2c = new THREE['Group']();
        for (let _0x35b16e = 0x0; _0x35b16e < 0x5; _0x35b16e++) {
            const _0x179abd = new THREE[(_0x278002(0x147))](_0x37c710, _0x2374f5);
            _0x179abd['position'][_0x278002(0xb5)]((Math['random']() - 0.5) * 0x3, (Math[_0x278002(0xb0)]() - 0.5) * 0x1, (Math[_0x278002(0xb0)]() - 0.5) * 0x1), _0x179abd[_0x278002(0xf2)]['setScalar'](Math['random']() * 0.5 + 0.5), _0x39ae2c['add'](_0x179abd);
        }
        _0x39ae2c['position'][_0x278002(0xb5)]((Math['random']() - 0.5) * 0x50, Math[_0x278002(0xb0)]() * 0x5 + 0xa, (Math[_0x278002(0xb0)]() - 0.5) * 0x50 - 0x1e), scene['add'](_0x39ae2c);
    }
}
function createBirds() {
    const _0x4bfcf7 = a0_0x2659e9, _0x5a6747 = new THREE['BoxGeometry'](0.3, 0.05, 0.1), _0x42f363 = new THREE[(_0x4bfcf7(0xb7))]({ 'color': 0x111111 });
    for (let _0x268a01 = 0x0; _0x268a01 < 0x5; _0x268a01++) {
        const _0x3e060c = new THREE[(_0x4bfcf7(0x11c))](), _0x5c6f3e = new THREE[(_0x4bfcf7(0x147))](_0x5a6747, _0x42f363);
        _0x5c6f3e['position']['x'] = -0.15;
        const _0x11a819 = new THREE['Mesh'](_0x5a6747, _0x42f363);
        _0x11a819['position']['x'] = 0.15, _0x3e060c[_0x4bfcf7(0x89)](_0x5c6f3e), _0x3e060c[_0x4bfcf7(0x89)](_0x11a819), _0x3e060c[_0x4bfcf7(0x8f)][_0x4bfcf7(0xb5)]((Math[_0x4bfcf7(0xb0)]() - 0.5) * 0x64, Math[_0x4bfcf7(0xb0)]() * 0x5 + 0xc, (Math[_0x4bfcf7(0xb0)]() - 0.5) * 0x28 - 0x28), _0x3e060c[_0x4bfcf7(0x10b)] = new THREE['Vector3'](Math[_0x4bfcf7(0xb0)]() * 0x2 + 0x2, 0x0, 0x0), scene['add'](_0x3e060c), birds[_0x4bfcf7(0x113)](_0x3e060c);
    }
}
function createTextMaterial(_0x5e62f9, _0x54b4f9 = 0x100, _0xf41046 = 0x200, _0x2b0391 = a0_0x2659e9(0x7d)) {
    const _0x310f5b = a0_0x2659e9, _0x1ea686 = document[_0x310f5b(0xc9)](_0x310f5b(0x120));
    _0x1ea686[_0x310f5b(0x9a)] = _0x54b4f9, _0x1ea686[_0x310f5b(0xf3)] = _0xf41046;
    const _0x477bff = _0x1ea686[_0x310f5b(0x12c)]('2d');
    _0x477bff[_0x310f5b(0x9f)] = _0x310f5b(0x84), _0x477bff[_0x310f5b(0x98)](0x0, 0x0, _0x54b4f9, _0xf41046), _0x477bff['font'] = _0x310f5b(0x91) + _0x54b4f9 * 0.8 + _0x310f5b(0xf0), _0x477bff[_0x310f5b(0x9f)] = _0x310f5b(0xe7), _0x477bff['textAlign'] = _0x310f5b(0x88), _0x477bff[_0x310f5b(0x144)] = 'middle', _0x477bff[_0x310f5b(0x129)](_0x5e62f9, _0x54b4f9 / 0x2, _0xf41046 / 0x2);
    const _0x5d91df = new THREE[(_0x310f5b(0x14e))](_0x1ea686);
    return new THREE[(_0x310f5b(0x151))]({
        'map': _0x5d91df,
        'roughness': 0.8,
        'metalness': 0.1
    });
}
function a0_0x5a3c(_0x623dc1, _0x415148) {
    const _0x19772f = a0_0x1977();
    return a0_0x5a3c = function (_0x5a3cc7, _0x124fa1) {
        _0x5a3cc7 = _0x5a3cc7 - 0x7b;
        let _0x59251f = _0x19772f[_0x5a3cc7];
        return _0x59251f;
    }, a0_0x5a3c(_0x623dc1, _0x415148);
}
function createCharacter() {
    const _0x529736 = a0_0x2659e9;
    character = new THREE[(_0x529736(0x11c))](), scene[_0x529736(0x89)](character), character[_0x529736(0x8f)]['y'] = 0.5, character[_0x529736(0x100)]['y'] = 0x0;
    const _0x44619e = new THREE[(_0x529736(0x151))]({
            'roughness': 0.8,
            'metalness': 0.1
        }), _0x2d92d7 = Math[_0x529736(0xb0)]() > 0.5, _0x4b3798 = 0xffdab9, _0x45f621 = 0x464646, _0x3cd2e4 = new THREE[(_0x529736(0xd6))](0.8, 0.8, 0.6), _0x53f24c = 0x3b2219, _0x33c001 = [
            new THREE[(_0x529736(0x151))]({
                'color': _0x53f24c,
                'roughness': 0.8,
                'metalness': 0.1
            }),
            new THREE['MeshStandardMaterial']({
                'color': _0x53f24c,
                'roughness': 0.8,
                'metalness': 0.1
            }),
            new THREE[(_0x529736(0x151))]({
                'color': _0x53f24c,
                'roughness': 0.8,
                'metalness': 0.1
            }),
            new THREE[(_0x529736(0x151))]({
                'color': _0x4b3798,
                'roughness': 0.8,
                'metalness': 0.1
            }),
            new THREE['MeshStandardMaterial']({
                'color': _0x4b3798,
                'roughness': 0.8,
                'metalness': 0.1
            }),
            new THREE[(_0x529736(0x151))]({
                'color': _0x53f24c,
                'roughness': 0.8,
                'metalness': 0.1
            })
        ], _0x504b95 = new THREE['Mesh'](_0x3cd2e4, _0x33c001);
    _0x504b95[_0x529736(0x122)] = !![], _0x504b95[_0x529736(0x8f)]['y'] = 0.6, character['add'](_0x504b95), character['head'] = _0x504b95;
    const _0x2f90d2 = 0.301, _0x2666fb = new THREE[(_0x529736(0xd6))](0.8, 0.3, 0.01), _0x2cb2d9 = new THREE[(_0x529736(0xb7))]({ 'color': _0x53f24c }), _0x4f8c69 = new THREE['Mesh'](_0x2666fb, _0x2cb2d9);
    _0x4f8c69['position'][_0x529736(0xb5)](0x0, 0.3, _0x2f90d2), _0x504b95[_0x529736(0x89)](_0x4f8c69), character[_0x529736(0x102)] = _0x4f8c69;
    const _0x219178 = new THREE['BoxGeometry'](0.1, 0.15, 0x0), _0x1b363c = new THREE[(_0x529736(0xb7))]({ 'color': '#241478' }), _0x2f1b6d = new THREE[(_0x529736(0x147))](_0x219178, _0x1b363c[_0x529736(0xc5)]());
    _0x2f1b6d[_0x529736(0x8f)][_0x529736(0xb5)](0.15, -0.02, _0x2f90d2), _0x504b95[_0x529736(0x89)](_0x2f1b6d), character['leftEye'] = _0x2f1b6d;
    const _0x46e387 = new THREE[(_0x529736(0x147))](_0x219178, _0x1b363c[_0x529736(0xc5)]());
    _0x46e387[_0x529736(0x8f)][_0x529736(0xb5)](-0.15, -0.02, _0x2f90d2), _0x504b95[_0x529736(0x89)](_0x46e387), character[_0x529736(0xbf)] = _0x46e387;
    const _0x130afe = new THREE[(_0x529736(0xd6))](0.05, 0.05, 0x0), _0x1877f8 = new THREE['MeshBasicMaterial']({ 'color': '#66442c' }), _0x4a70c8 = new THREE[(_0x529736(0x147))](_0x130afe, _0x1877f8);
    _0x4a70c8['position'][_0x529736(0xb5)](0x0, -0.1, _0x2f90d2), _0x504b95['add'](_0x4a70c8), character['nose'] = _0x4a70c8;
    const _0x4be8cd = new THREE['BoxGeometry'](0.2, 0.1, 0x0), _0x47e70b = new THREE[(_0x529736(0xb7))]({ 'color': '#66442c' }), _0x47e2e9 = new THREE[(_0x529736(0x147))](_0x4be8cd, _0x47e70b);
    _0x47e2e9[_0x529736(0x8f)][_0x529736(0xb5)](0x0, -0.25, _0x2f90d2), _0x504b95[_0x529736(0x89)](_0x47e2e9), character[_0x529736(0x118)] = _0x47e2e9;
    const _0x294d3b = new THREE[(_0x529736(0xd6))](0.8, 0x0, 0.4), _0x5d0aad = new THREE[(_0x529736(0x151))]({
            'color': _0x4b3798,
            'roughness': 0.8,
            'metalness': 0.1
        }), _0x494ed1 = new THREE[(_0x529736(0x147))](_0x294d3b, _0x5d0aad);
    _0x494ed1[_0x529736(0x122)] = !![], character['add'](_0x494ed1), character[_0x529736(0xc2)] = _0x494ed1;
    const _0x33dc8b = new THREE[(_0x529736(0xd6))](0.85, 0.7, 0.45), _0x5288a5 = createTextMaterial('영', 0x64, 0x64), _0xd8a7a5 = createTextMaterial('올', 0x64, 0x64), _0x445c42 = new THREE[(_0x529736(0x151))]({
            'color': 0x7cb342,
            'roughness': 0.8,
            'metalness': 0.1
        }), _0x3a5912 = [
            _0x445c42,
            _0x445c42,
            _0x445c42,
            _0x445c42,
            _0xd8a7a5,
            _0x5288a5
        ], _0x3bf6e = new THREE[(_0x529736(0x147))](_0x33dc8b, _0x3a5912);
    _0x3bf6e[_0x529736(0x122)] = !![], _0x3bf6e[_0x529736(0x8f)]['y'] = -0.15, character[_0x529736(0x89)](_0x3bf6e), character[_0x529736(0x7e)] = _0x3bf6e;
    const _0x488af5 = new THREE['BoxGeometry'](0.3, 0.5, 0.3), _0x562dc3 = new THREE[(_0x529736(0x151))]({
            'color': _0x4b3798,
            'roughness': 0.8,
            'metalness': 0.1
        }), _0x3b8a95 = new THREE[(_0x529736(0x147))](_0x488af5, _0x562dc3);
    _0x3b8a95[_0x529736(0x122)] = !![], _0x3b8a95[_0x529736(0x8f)]['set'](0.55, -0.1, 0x0), character[_0x529736(0x89)](_0x3b8a95), character[_0x529736(0x83)] = _0x3b8a95;
    const _0x5a8b2e = new THREE[(_0x529736(0x147))](_0x488af5, _0x562dc3);
    _0x5a8b2e[_0x529736(0x122)] = !![], _0x5a8b2e[_0x529736(0x8f)]['set'](-0.55, -0.1, 0x0), character[_0x529736(0x89)](_0x5a8b2e), character[_0x529736(0xbc)] = _0x5a8b2e;
    const _0x4c5a4c = new THREE[(_0x529736(0xd6))](0.35, 0.8, 0.35), _0x3eb35d = new THREE[(_0x529736(0x151))]({
            'color': _0x45f621,
            'roughness': 0.8,
            'metalness': 0.1
        }), _0x25d750 = new THREE[(_0x529736(0x147))](_0x4c5a4c, _0x3eb35d);
    _0x25d750[_0x529736(0x122)] = !![], _0x25d750[_0x529736(0x8f)]['set'](0.2, -0.9, 0x0), character[_0x529736(0x89)](_0x25d750), character[_0x529736(0xd3)] = _0x25d750;
    const _0x1bdcf3 = new THREE[(_0x529736(0x147))](_0x4c5a4c, _0x3eb35d);
    _0x1bdcf3['castShadow'] = !![], _0x1bdcf3['position'][_0x529736(0xb5)](-0.2, -0.9, 0x0), character['add'](_0x1bdcf3), character[_0x529736(0xb9)] = _0x1bdcf3;
}
function playSound(_0x145861) {
    const _0x21ea4a = a0_0x2659e9;
    if (!audioCtx)
        try {
            audioCtx = new (window[(_0x21ea4a(0xa8))] || window[(_0x21ea4a(0x121))])();
        } catch (_0x32a275) {
            console['error'](_0x21ea4a(0x81));
            return;
        }
    let _0x38e3b = audioCtx[_0x21ea4a(0x143)](), _0x5b5ab0 = audioCtx[_0x21ea4a(0x12d)]();
    _0x38e3b[_0x21ea4a(0xfe)](_0x5b5ab0), _0x5b5ab0['connect'](audioCtx[_0x21ea4a(0x80)]), _0x5b5ab0[_0x21ea4a(0xc6)][_0x21ea4a(0x8a)](0.2 * sfxVolume, audioCtx[_0x21ea4a(0x12e)]);
    switch (_0x145861) {
    case 'ArrowUp':
    case 'ArrowDown':
    case _0x21ea4a(0x154):
    case _0x21ea4a(0xd1):
        _0x38e3b[_0x21ea4a(0x105)] = _0x21ea4a(0x9e), _0x38e3b['frequency']['setValueAtTime'](0x1b8, audioCtx[_0x21ea4a(0x12e)]), _0x38e3b['frequency'][_0x21ea4a(0x93)](0x294, audioCtx[_0x21ea4a(0x12e)] + 0.1), _0x5b5ab0[_0x21ea4a(0xc6)][_0x21ea4a(0x115)](0.00001, audioCtx[_0x21ea4a(0x12e)] + 0.15);
        break;
    case _0x21ea4a(0xaf):
        _0x38e3b[_0x21ea4a(0x105)] = _0x21ea4a(0xae), _0x38e3b[_0x21ea4a(0x13c)][_0x21ea4a(0x8a)](0x320, audioCtx[_0x21ea4a(0x12e)]), _0x38e3b[_0x21ea4a(0x13c)][_0x21ea4a(0x8a)](0x258, audioCtx['currentTime'] + 0.05), _0x5b5ab0[_0x21ea4a(0xc6)][_0x21ea4a(0x115)](0.00001, audioCtx[_0x21ea4a(0x12e)] + 0.1);
        break;
    case _0x21ea4a(0xa6):
        _0x38e3b[_0x21ea4a(0x105)] = 'sine';
        const _0xa64948 = [
            0x20b,
            0x293,
            0x310,
            0x417
        ];
        _0xa64948[_0x21ea4a(0x135)]((_0x5792d4, _0x36a0bd) => {
            const _0x3913b0 = _0x21ea4a, _0xbcefeb = audioCtx['createOscillator'](), _0x58b5ff = audioCtx['createGain']();
            _0xbcefeb[_0x3913b0(0xfe)](_0x58b5ff), _0x58b5ff[_0x3913b0(0xfe)](audioCtx[_0x3913b0(0x80)]), _0xbcefeb[_0x3913b0(0x105)] = 'sine', _0xbcefeb[_0x3913b0(0x13c)][_0x3913b0(0x8a)](_0x5792d4, audioCtx[_0x3913b0(0x12e)] + _0x36a0bd * 0.1), _0x58b5ff[_0x3913b0(0xc6)][_0x3913b0(0x8a)](0.15 * sfxVolume, audioCtx[_0x3913b0(0x12e)] + _0x36a0bd * 0.1), _0x58b5ff['gain'][_0x3913b0(0x115)](0.00001, audioCtx[_0x3913b0(0x12e)] + _0x36a0bd * 0.1 + 0.3), _0xbcefeb[_0x3913b0(0x85)](audioCtx[_0x3913b0(0x12e)] + _0x36a0bd * 0.1), _0xbcefeb[_0x3913b0(0x150)](audioCtx[_0x3913b0(0x12e)] + _0x36a0bd * 0.1 + 0.3);
        });
        return;
    case _0x21ea4a(0x13f):
        _0x38e3b[_0x21ea4a(0x105)] = _0x21ea4a(0xd4), _0x38e3b[_0x21ea4a(0x13c)][_0x21ea4a(0x8a)](0xa4, audioCtx[_0x21ea4a(0x12e)]), _0x38e3b[_0x21ea4a(0x13c)][_0x21ea4a(0x115)](0x64, audioCtx[_0x21ea4a(0x12e)] + 0.2), _0x5b5ab0[_0x21ea4a(0xc6)][_0x21ea4a(0x115)](0.00001, audioCtx[_0x21ea4a(0x12e)] + 0.3);
        break;
    case _0x21ea4a(0x111):
        _0x38e3b[_0x21ea4a(0x105)] = _0x21ea4a(0xd4), _0x5b5ab0[_0x21ea4a(0xc6)][_0x21ea4a(0x8a)](0.3 * sfxVolume, audioCtx[_0x21ea4a(0x12e)]);
        let _0x90efc1 = [
            0x1b8,
            0x19f,
            0x188,
            0x15d,
            0x14a,
            0x126,
            0x115,
            0x105
        ];
        _0x90efc1[_0x21ea4a(0x135)]((_0x57bbb5, _0x2d4149) => {
            const _0xffe297 = _0x21ea4a;
            _0x38e3b['frequency']['setValueAtTime'](_0x57bbb5, audioCtx[_0xffe297(0x12e)] + _0x2d4149 * 0.07);
        }), _0x38e3b[_0x21ea4a(0x13c)]['setValueAtTime'](0x82, audioCtx[_0x21ea4a(0x12e)] + _0x90efc1[_0x21ea4a(0x8e)] * 0.07), _0x5b5ab0[_0x21ea4a(0xc6)][_0x21ea4a(0x115)](0.00001, audioCtx[_0x21ea4a(0x12e)] + 1.2);
        break;
    }
    _0x38e3b[_0x21ea4a(0x85)](audioCtx[_0x21ea4a(0x12e)]), _0x38e3b[_0x21ea4a(0x150)](audioCtx[_0x21ea4a(0x12e)] + 1.2);
}
function playAnimation(_0x480ac2) {
    const _0x12cd0d = a0_0x2659e9;
    playSound(_0x480ac2);
    const _0x44cb64 = () => {
        const _0x2f59ac = a0_0x5a3c;
        character[_0x2f59ac(0x83)]['rotation']['set'](0x0, 0x0, 0x0), character[_0x2f59ac(0xbc)][_0x2f59ac(0x100)][_0x2f59ac(0xb5)](0x0, 0x0, 0x0), character[_0x2f59ac(0xd3)][_0x2f59ac(0x100)][_0x2f59ac(0xb5)](0x0, 0x0, 0x0), character['rightLeg'][_0x2f59ac(0x100)][_0x2f59ac(0xb5)](0x0, 0x0, 0x0), character[_0x2f59ac(0xab)]['rotation'][_0x2f59ac(0xb5)](0x0, 0x0, 0x0), character[_0x2f59ac(0xbc)][_0x2f59ac(0x8f)]['z'] = 0x0, character[_0x2f59ac(0x8f)]['y'] = 0.5;
    };
    _0x44cb64();
    const _0x38bff2 = 0x190;
    switch (_0x480ac2) {
    case _0x12cd0d(0x141):
        character[_0x12cd0d(0xab)][_0x12cd0d(0x100)]['x'] = -Math['PI'] / 0x10, character[_0x12cd0d(0xbc)][_0x12cd0d(0x100)]['x'] = -Math['PI'] / 2.5, character['rightArm'][_0x12cd0d(0x8f)]['z'] = -0.1, setTimeout(_0x44cb64, _0x38bff2);
        break;
    case 'ArrowDown':
        character[_0x12cd0d(0x8f)]['y'] = 0.3, character[_0x12cd0d(0xd3)][_0x12cd0d(0x100)]['x'] = -Math['PI'] / 0x4, character['rightLeg']['rotation']['x'] = Math['PI'] / 0x4, setTimeout(() => {
            character['position']['y'] = 0.7;
        }, 0x64), setTimeout(() => {
            const _0x5beda1 = _0x12cd0d;
            character[_0x5beda1(0x8f)]['y'] = 0.5, character['leftLeg'][_0x5beda1(0x100)]['x'] = 0x0, character['rightLeg'][_0x5beda1(0x100)]['x'] = 0x0;
        }, 0xfa), setTimeout(_0x44cb64, _0x38bff2);
        break;
    case _0x12cd0d(0x154):
        character[_0x12cd0d(0x100)]['y'] = Math['PI'] / 0x8, character[_0x12cd0d(0x83)][_0x12cd0d(0x100)]['z'] = Math['PI'] / 0x4, character[_0x12cd0d(0xbc)][_0x12cd0d(0x100)]['z'] = -Math['PI'] / 0x4, setTimeout(() => {
            const _0x26304f = _0x12cd0d;
            character[_0x26304f(0x100)]['y'] = Math['PI'] / 0x8, character['leftArm']['rotation']['z'] = -Math['PI'] / 0x4, character[_0x26304f(0xbc)][_0x26304f(0x100)]['z'] = Math['PI'] / 0x4;
        }, _0x38bff2 / 0x2), setTimeout(_0x44cb64, _0x38bff2);
        break;
    case 'ArrowRight':
        character[_0x12cd0d(0x83)][_0x12cd0d(0x100)]['x'] = -Math['PI'] * 0.9, character['rightArm'][_0x12cd0d(0x100)]['x'] = -Math['PI'] * 0.9, character['rightLeg']['rotation']['x'] = -Math['PI'] / 0x4, setTimeout(_0x44cb64, _0x38bff2);
        break;
    }
}
function createWaterSplash() {
    const _0x1c0f22 = a0_0x2659e9, _0x3c8f81 = 0x64, _0x8e5a71 = new THREE[(_0x1c0f22(0x142))](0.05, 0x8, 0x8), _0x28e05a = new THREE[(_0x1c0f22(0xb7))]({ 'color': 0xbfff });
    for (let _0xd4f034 = 0x0; _0xd4f034 < _0x3c8f81; _0xd4f034++) {
        const _0x478119 = new THREE[(_0x1c0f22(0x147))](_0x8e5a71, _0x28e05a);
        _0x478119['position'][_0x1c0f22(0x132)](character[_0x1c0f22(0x8f)]), _0x478119[_0x1c0f22(0x8f)]['y'] += 0.8, _0x478119[_0x1c0f22(0x10b)] = new THREE['Vector3']((Math['random']() - 0.5) * 0x3, Math['random']() * 0x2 + 0x2, (Math[_0x1c0f22(0xb0)]() - 0.5) * 0x3), scene[_0x1c0f22(0x89)](_0x478119), waterParticles[_0x1c0f22(0x113)](_0x478119);
    }
}
let idleAnimationTimer = 0x0, lastIdleAction = 0x0;
const idleActions = [
    'dance',
    'stretch',
    a0_0x2659e9(0x7b),
    a0_0x2659e9(0xad),
    a0_0x2659e9(0x124)
];
let walkAnimationTimer = 0x0, walkTargetPosition = {
        'x': 0x0,
        'z': 0x0
    }, walkStartPosition = {
        'x': 0x0,
        'z': 0x0
    }, walkProgress = 0x0, isWalking = ![], walkDuration = 0x0;
function startWalking() {
    const _0x2c557a = a0_0x2659e9;
    if (!character || isWalking)
        return;
    const _0x8d9512 = Math[_0x2c557a(0xb0)]() * Math['PI'] * 0x2, _0xf6ec37 = 0x1 + Math[_0x2c557a(0xb0)]() * 1.5;
    walkTargetPosition['x'] = Math['cos'](_0x8d9512) * _0xf6ec37, walkTargetPosition['z'] = Math['sin'](_0x8d9512) * _0xf6ec37;
    const _0x5b42bf = 2.5, _0x1ba879 = Math[_0x2c557a(0x133)](walkTargetPosition['x'] * walkTargetPosition['x'] + walkTargetPosition['z'] * walkTargetPosition['z']);
    if (_0x1ba879 > _0x5b42bf) {
        const _0x5a3342 = _0x5b42bf / _0x1ba879;
        walkTargetPosition['x'] *= _0x5a3342, walkTargetPosition['z'] *= _0x5a3342;
    }
    walkStartPosition['x'] = character[_0x2c557a(0x8f)]['x'], walkStartPosition['z'] = character[_0x2c557a(0x8f)]['z'], isWalking = !![], walkProgress = 0x0, walkDuration = 0xbb8 + Math[_0x2c557a(0xb0)]() * 0x7d0;
    const _0x4a9cfb = walkTargetPosition['x'] - walkStartPosition['x'], _0x2a6441 = walkTargetPosition['z'] - walkStartPosition['z'], _0x54dfde = Math[_0x2c557a(0x103)](_0x4a9cfb, _0x2a6441);
    character[_0x2c557a(0x100)]['y'] = _0x54dfde;
}
function updateWalking(_0x110af9) {
    const _0x5203de = a0_0x2659e9;
    if (!isWalking || !character)
        return;
    walkProgress += _0x110af9 * 0x3e8;
    const _0x5f24bd = Math['min'](walkProgress / walkDuration, 0x1), _0x3316f9 = _0x5f24bd * _0x5f24bd * (0x3 - 0x2 * _0x5f24bd);
    let _0x3d7ded = walkStartPosition['x'] + (walkTargetPosition['x'] - walkStartPosition['x']) * _0x3316f9, _0x5dd2be = walkStartPosition['z'] + (walkTargetPosition['z'] - walkStartPosition['z']) * _0x3316f9;
    const _0x5e3525 = Math[_0x5203de(0x133)](_0x3d7ded * _0x3d7ded + _0x5dd2be * _0x5dd2be), _0x479b23 = 2.5;
    if (_0x5e3525 > _0x479b23) {
        const _0x4c898a = _0x479b23 / _0x5e3525;
        _0x3d7ded *= _0x4c898a, _0x5dd2be *= _0x4c898a;
    }
    character[_0x5203de(0x8f)]['x'] = _0x3d7ded, character[_0x5203de(0x8f)]['z'] = _0x5dd2be;
    const _0x1e1e03 = Math['sin'](walkProgress * 0.01) * 0.3;
    character[_0x5203de(0xd3)][_0x5203de(0x100)]['x'] = _0x1e1e03, character[_0x5203de(0xb9)][_0x5203de(0x100)]['x'] = -_0x1e1e03, character[_0x5203de(0x83)][_0x5203de(0x100)]['x'] = -_0x1e1e03 * 0.5, character[_0x5203de(0xbc)][_0x5203de(0x100)]['x'] = _0x1e1e03 * 0.5, _0x5f24bd >= 0x1 && (isWalking = ![], character[_0x5203de(0xd3)][_0x5203de(0x100)]['x'] = 0x0, character['rightLeg'][_0x5203de(0x100)]['x'] = 0x0, character[_0x5203de(0x83)][_0x5203de(0x100)]['x'] = 0x0, character[_0x5203de(0xbc)][_0x5203de(0x100)]['x'] = 0x0, setTimeout(() => {
        const _0x2932fb = _0x5203de;
        gameState === _0x2932fb(0xff) && startWalking();
    }, 0x7d0 + Math[_0x5203de(0xb0)]() * 0xbb8));
}
function teleportToCenter() {
    const _0x2acb9e = a0_0x2659e9;
    if (!character)
        return;
    const _0x5da89d = character[_0x2acb9e(0xf2)]['clone']();
    character[_0x2acb9e(0xf2)][_0x2acb9e(0xb5)](0.1, 0.1, 0.1), character[_0x2acb9e(0x8f)][_0x2acb9e(0xb5)](0x0, 0.5, 0x0), character['rotation']['y'] = Math['PI'];
    const _0x540008 = () => {
        const _0x2e2380 = _0x2acb9e;
        character && (character['scale'][_0x2e2380(0xf6)](_0x5da89d, 0.1), character[_0x2e2380(0xf2)][_0x2e2380(0x14d)](_0x5da89d) > 0.01 ? requestAnimationFrame(_0x540008) : character[_0x2e2380(0xf2)][_0x2e2380(0x132)](_0x5da89d));
    };
    _0x540008();
}
function playIdleAnimation() {
    const _0x10dc3a = a0_0x2659e9;
    if (!character)
        return;
    const _0x52f806 = idleActions[Math[_0x10dc3a(0x14b)](Math['random']() * idleActions[_0x10dc3a(0x8e)])], _0x2ee877 = 0x7d0;
    switch (_0x52f806) {
    case 'dance':
        character[_0x10dc3a(0x100)]['y'] = Math['PI'] / 0x8, character[_0x10dc3a(0x83)][_0x10dc3a(0x100)]['z'] = Math['PI'] / 0x4, character[_0x10dc3a(0xbc)]['rotation']['z'] = -Math['PI'] / 0x4, setTimeout(() => {
            const _0x48934f = _0x10dc3a;
            character && (character[_0x48934f(0x100)]['y'] = 0x0, character[_0x48934f(0x83)]['rotation']['z'] = 0x0, character[_0x48934f(0xbc)][_0x48934f(0x100)]['z'] = 0x0);
        }, _0x2ee877);
        break;
    case _0x10dc3a(0x124):
        const _0x1f26f2 = 0xfa0, _0x5a6374 = 0x8;
        let _0x38e28b = 0x0;
        const _0x58674b = setInterval(() => {
            const _0x187e5e = _0x10dc3a;
            if (character && _0x38e28b < _0x5a6374) {
                const _0x1dd84c = Math[_0x187e5e(0x12a)](_0x38e28b * 0.5) * 0.2;
                character[_0x187e5e(0xd3)][_0x187e5e(0x100)]['x'] = _0x1dd84c, character[_0x187e5e(0xb9)][_0x187e5e(0x100)]['x'] = -_0x1dd84c, character[_0x187e5e(0x83)]['rotation']['x'] = -_0x1dd84c * 0.3, character[_0x187e5e(0xbc)][_0x187e5e(0x100)]['x'] = _0x1dd84c * 0.3, character[_0x187e5e(0x100)]['z'] = Math[_0x187e5e(0x12a)](_0x38e28b * 0.3) * 0.1, character[_0x187e5e(0xab)]['rotation']['y'] = Math[_0x187e5e(0x12a)](_0x38e28b * 0.4) * 0.2, _0x38e28b++;
            } else
                clearInterval(_0x58674b), character && (character[_0x187e5e(0xd3)]['rotation']['x'] = 0x0, character[_0x187e5e(0xb9)][_0x187e5e(0x100)]['x'] = 0x0, character[_0x187e5e(0x83)]['rotation']['x'] = 0x0, character['rightArm']['rotation']['x'] = 0x0, character[_0x187e5e(0x100)]['z'] = 0x0, character[_0x187e5e(0xab)][_0x187e5e(0x100)]['y'] = 0x0);
        }, 0x1f4);
        break;
    case _0x10dc3a(0x123):
        character[_0x10dc3a(0x83)][_0x10dc3a(0x100)]['x'] = -Math['PI'] / 0x2, character['rightArm'][_0x10dc3a(0x100)]['x'] = -Math['PI'] / 0x2, character['head'][_0x10dc3a(0x100)]['x'] = -Math['PI'] / 0xc, setTimeout(() => {
            const _0x25bec5 = _0x10dc3a;
            character && (character[_0x25bec5(0x83)][_0x25bec5(0x100)]['x'] = 0x0, character[_0x25bec5(0xbc)][_0x25bec5(0x100)]['x'] = 0x0, character[_0x25bec5(0xab)][_0x25bec5(0x100)]['x'] = 0x0);
        }, _0x2ee877);
        break;
    case _0x10dc3a(0x7b):
        character[_0x10dc3a(0xbc)]['rotation']['x'] = -Math['PI'] / 0x4, character['rightArm'][_0x10dc3a(0x100)]['z'] = Math['PI'] / 0x6, setTimeout(() => {
            const _0x5752c3 = _0x10dc3a;
            character && (character[_0x5752c3(0xbc)][_0x5752c3(0x100)]['x'] = 0x0, character['rightArm'][_0x5752c3(0x100)]['z'] = 0x0);
        }, _0x2ee877);
        break;
    case _0x10dc3a(0xad):
        const _0x24db4d = 0x3;
        let _0x1b1693 = 0x0;
        const _0x1df759 = setInterval(() => {
            const _0x48e06d = _0x10dc3a;
            if (character && _0x1b1693 < _0x24db4d)
                character[_0x48e06d(0xab)]['rotation']['x'] = _0x1b1693 % 0x2 === 0x0 ? -Math['PI'] / 0x10 : Math['PI'] / 0x10, _0x1b1693++;
            else {
                clearInterval(_0x1df759);
                if (character)
                    character[_0x48e06d(0xab)][_0x48e06d(0x100)]['x'] = 0x0;
            }
        }, 0x12c);
        break;
    }
}
function animate() {
    const _0x5d3ea7 = a0_0x2659e9;
    requestAnimationFrame(animate);
    const _0x492678 = clock[_0x5d3ea7(0xf1)](), _0x2ecfd5 = clock['getElapsedTime']();
    waterParticles['length'] > 0x0 && waterParticles[_0x5d3ea7(0x135)]((_0xb7e4dc, _0x4fdf81) => {
        const _0x3db48a = _0x5d3ea7;
        _0xb7e4dc[_0x3db48a(0x10b)]['y'] -= 9.8 * _0x492678, _0xb7e4dc[_0x3db48a(0x8f)][_0x3db48a(0x109)](_0xb7e4dc['velocity'], _0x492678), _0xb7e4dc[_0x3db48a(0x8f)]['y'] < 0x0 && (scene[_0x3db48a(0x7f)](_0xb7e4dc), waterParticles[_0x3db48a(0xb2)](_0x4fdf81, 0x1));
    });
    birds[_0x5d3ea7(0x135)](_0x17a835 => {
        const _0x12b996 = _0x5d3ea7;
        _0x17a835[_0x12b996(0x8f)][_0x12b996(0x109)](_0x17a835[_0x12b996(0x10b)], _0x492678), _0x17a835[_0x12b996(0x117)][0x0][_0x12b996(0x100)]['z'] = Math[_0x12b996(0x12a)](_0x2ecfd5 * 0x14) * 0.5, _0x17a835[_0x12b996(0x117)][0x1][_0x12b996(0x100)]['z'] = -Math[_0x12b996(0x12a)](_0x2ecfd5 * 0x14) * 0.5, _0x17a835['position']['x'] > 0x3c && (_0x17a835['position']['x'] = -0x3c, _0x17a835[_0x12b996(0x8f)]['y'] = Math[_0x12b996(0xb0)]() * 0x5 + 0xc);
    }), hotAirBalloons['forEach'](_0x1be874 => {
        const _0x270864 = _0x5d3ea7;
        _0x1be874['position']['y'] += Math[_0x270864(0x12a)](_0x2ecfd5 * 0.5 + _0x1be874[_0x270864(0x8f)]['x']) * 0.005;
    });
    const _0xa1838 = document['getElementById'](_0x5d3ea7(0xe4)), _0x470ac6 = document[_0x5d3ea7(0x82)](_0x5d3ea7(0xef)), _0x4d8e2f = _0xa1838 && !_0xa1838[_0x5d3ea7(0x116)][_0x5d3ea7(0x11d)](_0x5d3ea7(0x136)), _0x2e2ae6 = _0x470ac6 && _0x470ac6['style']['display'] !== _0x5d3ea7(0x94);
    _0x4d8e2f && !_0x2e2ae6 && character ? (idleAnimationTimer += _0x492678 * 0x3e8, updateWalking(_0x492678), !isWalking && idleAnimationTimer - lastIdleAction > 0xbb8 + Math[_0x5d3ea7(0xb0)]() * 0x1388 && (playIdleAnimation(), lastIdleAction = idleAnimationTimer)) : isWalking && (isWalking = ![], character && (character[_0x5d3ea7(0xd3)][_0x5d3ea7(0x100)]['x'] = 0x0, character[_0x5d3ea7(0xb9)][_0x5d3ea7(0x100)]['x'] = 0x0, character[_0x5d3ea7(0x83)][_0x5d3ea7(0x100)]['x'] = 0x0, character[_0x5d3ea7(0xbc)][_0x5d3ea7(0x100)]['x'] = 0x0, character[_0x5d3ea7(0x100)]['z'] = 0x0, character[_0x5d3ea7(0xab)][_0x5d3ea7(0x100)]['y'] = 0x0));
    const _0x10365e = mouse['x'] * 0.8, _0x599773 = 1.5 + mouse['y'] * 0.4;
    camera[_0x5d3ea7(0x8f)]['x'] += (_0x10365e - camera[_0x5d3ea7(0x8f)]['x']) * 0.05, camera[_0x5d3ea7(0x8f)]['y'] += (_0x599773 - camera[_0x5d3ea7(0x8f)]['y']) * 0.05, shakeDuration > 0x0 && (camera[_0x5d3ea7(0x8f)]['x'] += (Math[_0x5d3ea7(0xb0)]() - 0.5) * SHAKE_INTENSITY, camera[_0x5d3ea7(0x8f)]['y'] += (Math[_0x5d3ea7(0xb0)]() - 0.5) * SHAKE_INTENSITY, shakeDuration -= _0x492678), camera[_0x5d3ea7(0xf7)](0x0, 0x1, 0x0), renderer[_0x5d3ea7(0xbd)](scene, camera);
}
function startGame() {
    const _0x395936 = a0_0x2659e9;
    startScreen[_0x395936(0x116)][_0x395936(0x89)](_0x395936(0x136)), gameOverScreen['classList'][_0x395936(0x89)](_0x395936(0x136)), startCountdown();
}
function startCountdown() {
    const _0x105580 = a0_0x2659e9;
    character && (isWalking = ![], character[_0x105580(0x8f)][_0x105580(0xb5)](0x0, 0.5, 0x0), character[_0x105580(0x100)]['y'] = 0x0, character[_0x105580(0xd3)][_0x105580(0x100)]['x'] = 0x0, character[_0x105580(0xb9)][_0x105580(0x100)]['x'] = 0x0, character[_0x105580(0x83)][_0x105580(0x100)]['x'] = 0x0, character['rightArm'][_0x105580(0x100)]['x'] = 0x0, character['rotation']['z'] = 0x0, character[_0x105580(0xab)][_0x105580(0x100)]['y'] = 0x0);
    showVolumeControls();
    let _0x179f32 = 0x3;
    const _0x38396e = document[_0x105580(0xc9)]('div');
    _0x38396e['id'] = _0x105580(0xef), _0x38396e[_0x105580(0xc4)]['cssText'] = _0x105580(0xf5), _0x38396e[_0x105580(0x112)] = _0x179f32, document[_0x105580(0xc2)]['appendChild'](_0x38396e);
    const _0x4ef3ce = setInterval(() => {
        const _0x5871ad = _0x105580;
        _0x179f32--, _0x179f32 > 0x0 ? (_0x38396e[_0x5871ad(0x112)] = _0x179f32, playSound(_0x5871ad(0xaf))) : (_0x38396e[_0x5871ad(0x112)] = _0x5871ad(0xd8), playSound('success'), setTimeout(() => {
            const _0x267ec2 = _0x5871ad;
            document[_0x267ec2(0xc2)]['removeChild'](_0x38396e), startGameAfterCountdown();
        }, 0x1f4), clearInterval(_0x4ef3ce));
    }, 0x3e8);
}
function startGameAfterCountdown() {
    const _0x4a59cc = a0_0x2659e9;
    gameState = 'SHOWING', stage = INITIAL_STAGE, lives = INITIAL_LIVES, sequenceSpeed = INITIAL_SEQUENCE_SPEED, timeLimit = INITIAL_TIME_LIMIT, timerContainer[_0x4a59cc(0x116)][_0x4a59cc(0x7f)](_0x4a59cc(0x152)), progressContainer[_0x4a59cc(0x116)][_0x4a59cc(0x7f)](_0x4a59cc(0x152)), messageBox[_0x4a59cc(0xc4)][_0x4a59cc(0x157)] = '1', stageDisplay[_0x4a59cc(0xc4)][_0x4a59cc(0x157)] = '1', livesContainer[_0x4a59cc(0xc4)]['opacity'] = '1', showVolumeControls();
    if (character)
        scene[_0x4a59cc(0x7f)](character);
    createCharacter(), updateUI(), bgm['volume'] = bgmVolumeSlider[_0x4a59cc(0x14c)] / 0x64, bgm[_0x4a59cc(0x12e)] = 0x0;
    const _0x57d57c = bgm[_0x4a59cc(0xd5)]();
    _0x57d57c !== undefined && _0x57d57c[_0x4a59cc(0x11f)](_0x1702b2 => {
        const _0x37ad35 = _0x4a59cc;
        console[_0x37ad35(0xe8)]('Music\x20auto-play\x20was\x20prevented.\x20A\x20user\x20interaction\x20is\x20needed.');
    }), nextStage();
}
function calculateMemoryIndex(_0x41128e) {
    if (_0x41128e <= 0x0)
        return 0x32;
    const _0x17f157 = 0x32, _0x30440d = 0x1e, _0x8ed93f = 1.25, _0xc8e034 = _0x17f157 + _0x30440d * (Math['pow'](_0x8ed93f, _0x41128e) - 0x1);
    return Math['round'](_0xc8e034);
}
function nextStage() {
    const _0x1068bc = a0_0x2659e9;
    gameState = 'SHOWING', playerInput = [];
    const _0x4070bf = calculateMemoryIndex(stage);
    stageDisplay[_0x1068bc(0x116)][_0x1068bc(0x7f)](_0x1068bc(0xa3)), void stageDisplay[_0x1068bc(0xb6)], stageDisplay[_0x1068bc(0x112)] = _0x1068bc(0x13e), stageDisplay[_0x1068bc(0x116)]['add'](_0x1068bc(0xa3));
    const _0x52782d = Object['keys'](keywords);
    sequence = [];
    for (let _0x5af9d2 = 0x0; _0x5af9d2 < stage + 0x3; _0x5af9d2++) {
        sequence[_0x1068bc(0x113)](_0x52782d[Math['floor'](Math[_0x1068bc(0xb0)]() * _0x52782d['length'])]);
    }
    showSequence();
}
function a0_0x1977() {
    const _0x1119c0 = [
        'top',
        'center',
        'add',
        'setValueAtTime',
        'start-button',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20',
        'setSize',
        'length',
        'position',
        'data-key',
        'Bold\x20',
        'left',
        'linearRampToValueAtTime',
        'none',
        'innerHTML',
        'className',
        'AmbientLight',
        'fillRect',
        '8692266Qkpxnr',
        'width',
        '.key-indicator[data-key]',
        'clientWidth',
        '465995MhDxum',
        'sine',
        'fillStyle',
        'shadow',
        '#DDA0DD',
        'div',
        'iq-zoom',
        'rgba(239,\x2068,\x2068,\x200.9)',
        'resize',
        'success',
        'parentNode',
        'AudioContext',
        'animate-right',
        'translate(-50%,\x20-50%)',
        'head',
        'backgroundColor',
        'nod',
        'square',
        'beep',
        'random',
        'showSequence:\x20중간에\x20게임\x20상태\x20변경됨:',
        'splice',
        '#FFD700',
        'color',
        'set',
        'offsetWidth',
        'MeshBasicMaterial',
        'bgm',
        'rightLeg',
        'stage-display',
        'bold',
        'rightArm',
        'render',
        'project',
        'rightEye',
        '#98D8C8',
        'PerspectiveCamera',
        'body',
        'Clock',
        'style',
        'clone',
        'gain',
        'Color',
        'fontWeight',
        'createElement',
        '1224700nrzOCA',
        'WAITING',
        'target',
        '40xxxtqU',
        'startPlayerTurn:\x20게임\x20상태가\x20SHOWING이\x20아님:',
        'currentTarget',
        'GAMEOVER',
        'ArrowRight',
        'domElement',
        'leftLeg',
        'sawtooth',
        'play',
        'BoxGeometry',
        '24px',
        '시작!',
        '9nGEQqc',
        'setPixelRatio',
        '#4ECDC4',
        '#FBBF24',
        'clientY',
        'WebGLRenderer',
        '12883900mpSEAj',
        '\x20정도?',
        '#45B7D1',
        '#FF6B6B',
        'timer-bar',
        'start-screen',
        'receiveShadow',
        ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x201000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x202px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'white',
        'log',
        'message-box',
        'animate-up',
        'deg)',
        'innerHeight',
        'pulsing',
        'max',
        'countdown',
        'px\x20\x27IBM\x20Plex\x20Sans\x20KR\x27',
        'getDelta',
        'scale',
        'height',
        'DirectionalLight',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x20200px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateX(-50%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x20120px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#FFD700;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-shadow:\x203px\x203px\x206px\x20rgba(0,0,0,0.8);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x201000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20300px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20120px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20white-space:\x20nowrap;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'lerp',
        'lookAt',
        'ArrowDown',
        '당신의\x20올영력은\x20아마도...\x20',
        'getAttribute',
        'CylinderGeometry',
        'key',
        'transform',
        'connect',
        'START',
        'rotation',
        'display',
        'foreheadHair',
        'atan2',
        'rgba(34,\x20197,\x2094,\x200.9)',
        'type',
        'Vector2',
        'sfx-volume',
        'fontSize',
        'addScaledVector',
        '→\x20함께성장',
        'velocity',
        'clientX',
        'pause',
        'keydown',
        'lives-container',
        '42fmYXGQ',
        'gameover',
        'textContent',
        'push',
        'rotate(',
        'exponentialRampToValueAtTime',
        'classList',
        'children',
        'mouth',
        '45332HWqaKB',
        '276Tzuvov',
        'background',
        'Group',
        'contains',
        'clientHeight',
        'catch',
        'canvas',
        'webkitAudioContext',
        'castShadow',
        'stretch',
        'grassWalk',
        '게임오버\x20화면\x20표시\x20시도',
        '0.7',
        'showSequence:\x20게임\x20상태가\x20SHOWING이\x20아님:',
        'flex',
        'fillText',
        'sin',
        'timer-container',
        'getContext',
        'createGain',
        'currentTime',
        '11577lPUcPs',
        'addEventListener',
        'flash-overlay',
        'copy',
        'sqrt',
        '성공!',
        'forEach',
        'hidden',
        '1219763dLwQFt',
        'innerWidth',
        'Vector3',
        '↓\x20강한실행력',
        'cos',
        'frequency',
        '↑\x20트렌드리딩',
        '당신의\x20기억력은\x20아마도...',
        'incorrect',
        'SHOWING',
        'ArrowUp',
        'SphereGeometry',
        'createOscillator',
        'textBaseline',
        'fog',
        'appendChild',
        'Mesh',
        'retry-button',
        'canvas-container',
        'click',
        'floor',
        'value',
        'distanceTo',
        'CanvasTexture',
        'progress-dot',
        'stop',
        'MeshStandardMaterial',
        'opacity-0',
        'replace',
        'ArrowLeft',
        'text-4xl\x20md:text-6xl\x20font-bold\x20text-yellow-300',
        '게임오버\x20화면\x20클래스:',
        'opacity',
        'updateProjectionMatrix',
        'wave',
        'game-over-screen',
        'front',
        'shirt',
        'remove',
        'destination',
        'Web\x20Audio\x20API\x20is\x20not\x20supported\x20in\x20this\x20browser',
        'getElementById',
        'leftArm',
        '#7CB342',
        'start',
        'mapSize'
    ];
    a0_0x1977 = function () {
        return _0x1119c0;
    };
    return a0_0x1977();
}
function setupProgressIndicator() {
    const _0x56f764 = a0_0x2659e9;
    progressContainer[_0x56f764(0x95)] = '';
    for (let _0x2fb685 = 0x0; _0x2fb685 < sequence[_0x56f764(0x8e)]; _0x2fb685++) {
        const _0x21280d = document[_0x56f764(0xc9)]('div');
        _0x21280d[_0x56f764(0x96)] = _0x56f764(0x14f), progressContainer[_0x56f764(0x146)](_0x21280d);
    }
}
async function showSequence() {
    const _0x3f7947 = a0_0x2659e9;
    if (gameState !== _0x3f7947(0x140)) {
        console[_0x3f7947(0xe8)](_0x3f7947(0x127), gameState);
        return;
    }
    setupProgressIndicator();
    const _0xdaffcd = progressContainer['children'];
    for (let _0x3444d6 = 0x0; _0x3444d6 < sequence[_0x3f7947(0x8e)]; _0x3444d6++) {
        if (gameState !== _0x3f7947(0x140)) {
            console[_0x3f7947(0xe8)](_0x3f7947(0xb1), gameState);
            return;
        }
        const _0x1199f2 = sequence[_0x3444d6];
        await new Promise(_0x281213 => setTimeout(_0x281213, sequenceSpeed)), showMessage(keywords[_0x1199f2], _0x1199f2), playAnimation(_0x1199f2), _0xdaffcd[_0x3444d6] && (_0xdaffcd[_0x3444d6][_0x3f7947(0x95)] = arrowIcons[_0x1199f2], _0xdaffcd[_0x3444d6][_0x3f7947(0xc4)]['backgroundColor'] = _0x3f7947(0x104), _0xdaffcd[_0x3444d6][_0x3f7947(0xc4)][_0x3f7947(0xb4)] = _0x3f7947(0xe7), _0xdaffcd[_0x3444d6][_0x3f7947(0xc4)][_0x3f7947(0xc8)] = 'bold', _0xdaffcd[_0x3444d6][_0x3f7947(0xc4)][_0x3f7947(0x108)] = _0x3f7947(0xd7));
    }
    await new Promise(_0x4a81ab => setTimeout(_0x4a81ab, sequenceSpeed)), messageBox['className'] = messageBox[_0x3f7947(0x96)][_0x3f7947(0x153)](/animate-\w+/g, ''), messageBox[_0x3f7947(0xc4)]['opacity'] = 0x0, gameState === _0x3f7947(0x140) && startPlayerTurn();
}
function startPlayerTurn() {
    const _0x17c6ff = a0_0x2659e9;
    if (gameState !== _0x17c6ff(0x140)) {
        console[_0x17c6ff(0xe8)](_0x17c6ff(0xce), gameState);
        return;
    }
    gameState = _0x17c6ff(0xcb), playerInput = [], setupProgressIndicator(), startTimer();
}
function startTimer() {
    const _0x310acb = a0_0x2659e9;
    timerContainer[_0x310acb(0x116)][_0x310acb(0x7f)](_0x310acb(0x152));
    let _0x2c5953 = timeLimit;
    timerBar[_0x310acb(0xc4)][_0x310acb(0x9a)] = '100%', clearInterval(timerInterval), timerInterval = setInterval(() => {
        const _0x3ed71c = _0x310acb;
        if (gameState !== _0x3ed71c(0xcb)) {
            clearInterval(timerInterval);
            return;
        }
        _0x2c5953 -= 0x64;
        const _0x59cfa5 = _0x2c5953 / timeLimit * 0x64;
        timerBar[_0x3ed71c(0xc4)][_0x3ed71c(0x9a)] = _0x59cfa5 + '%', _0x2c5953 <= 0x0 && (clearInterval(timerInterval), handleIncorrectInput());
    }, 0x64);
}
function handlePlayerInput(_0x63a268) {
    const _0x43dd06 = a0_0x2659e9;
    if (gameState !== _0x43dd06(0xcb) || !keywords[_0x63a268[_0x43dd06(0xfc)]])
        return;
    if (playerInput[_0x43dd06(0x8e)] >= sequence['length'])
        return;
    playerInput['push'](_0x63a268[_0x43dd06(0xfc)]);
    const _0x35cf43 = playerInput[playerInput[_0x43dd06(0x8e)] - 0x1], _0x48a58b = sequence[playerInput[_0x43dd06(0x8e)] - 0x1], _0x5a4d22 = progressContainer['children'];
    _0x35cf43 !== _0x48a58b ? (_0x5a4d22[playerInput[_0x43dd06(0x8e)] - 0x1] && (_0x5a4d22[playerInput['length'] - 0x1][_0x43dd06(0xc4)][_0x43dd06(0xac)] = _0x43dd06(0xa4), _0x5a4d22[playerInput[_0x43dd06(0x8e)] - 0x1][_0x43dd06(0xc4)][_0x43dd06(0xb4)] = 'white', _0x5a4d22[playerInput[_0x43dd06(0x8e)] - 0x1][_0x43dd06(0xc4)][_0x43dd06(0xc8)] = _0x43dd06(0xbb), _0x5a4d22[playerInput[_0x43dd06(0x8e)] - 0x1]['style']['fontSize'] = '24px'), handleIncorrectInput()) : (playAnimation(_0x35cf43), _0x5a4d22[playerInput[_0x43dd06(0x8e)] - 0x1] && (_0x5a4d22[playerInput[_0x43dd06(0x8e)] - 0x1][_0x43dd06(0x95)] = arrowIcons[_0x35cf43], _0x5a4d22[playerInput['length'] - 0x1][_0x43dd06(0xc4)][_0x43dd06(0xac)] = _0x43dd06(0x104), _0x5a4d22[playerInput[_0x43dd06(0x8e)] - 0x1][_0x43dd06(0xc4)]['color'] = 'white', _0x5a4d22[playerInput[_0x43dd06(0x8e)] - 0x1][_0x43dd06(0xc4)][_0x43dd06(0xc8)] = _0x43dd06(0xbb), _0x5a4d22[playerInput[_0x43dd06(0x8e)] - 0x1][_0x43dd06(0xc4)][_0x43dd06(0x108)] = '24px'), playerInput[_0x43dd06(0x8e)] === sequence[_0x43dd06(0x8e)] && handleCorrectSequence());
}
function handleIncorrectInput() {
    const _0x327757 = a0_0x2659e9;
    playSound(_0x327757(0x13f)), clearInterval(timerInterval), timerContainer['classList'][_0x327757(0x89)](_0x327757(0x152)), createWaterSplash(), lives--, updateUI(), lives <= 0x0 ? gameOver() : (gameState = _0x327757(0x140), playerInput = [], setTimeout(() => {
        const _0x5dbd18 = _0x327757;
        messageBox[_0x5dbd18(0x96)] = messageBox[_0x5dbd18(0x96)][_0x5dbd18(0x153)](/animate-\w+/g, ''), messageBox[_0x5dbd18(0xc4)][_0x5dbd18(0x157)] = 0x0, showSequence();
    }, 0x5dc));
}
function handleCorrectSequence() {
    const _0x265e8b = a0_0x2659e9;
    clearInterval(timerInterval), timerContainer[_0x265e8b(0x116)][_0x265e8b(0x89)](_0x265e8b(0x152)), createConfetti(), showMessage(_0x265e8b(0x134), null, _0x265e8b(0xb3)), stage++, sequenceSpeed = Math[_0x265e8b(0xee)](0xc8, sequenceSpeed - 0x14), timeLimit = Math[_0x265e8b(0xee)](0xbb8, timeLimit - 0x64), setTimeout(() => {
        const _0x5cd5cf = _0x265e8b;
        messageBox['className'] = messageBox[_0x5cd5cf(0x96)]['replace'](/animate-\w+/g, ''), messageBox[_0x5cd5cf(0xc4)][_0x5cd5cf(0x157)] = 0x0, nextStage();
    }, 0x3e8);
}
function gameOver() {
    const _0x39fc41 = a0_0x2659e9;
    console[_0x39fc41(0xe8)]('gameOver\x20함수\x20호출됨'), bgm[_0x39fc41(0x10d)](), playSound(_0x39fc41(0x111)), gameState = _0x39fc41(0xd0), console[_0x39fc41(0xe8)](_0x39fc41(0x125)), gameOverScreen[_0x39fc41(0x116)][_0x39fc41(0x7f)](_0x39fc41(0x136)), console[_0x39fc41(0xe8)](_0x39fc41(0x156), gameOverScreen[_0x39fc41(0x96)]), flashOverlay[_0x39fc41(0xc4)]['opacity'] = _0x39fc41(0x126), setTimeout(() => {
        const _0x3bf369 = _0x39fc41;
        flashOverlay[_0x3bf369(0xc4)][_0x3bf369(0x157)] = '0';
    }, 0x64), shakeDuration = 0.5, setTimeout(() => {
        resetGame();
    }, 0x1388);
}
function showVolumeControls() {
    const _0xe4bfd0 = a0_0x2659e9, _0x20c15f = document[_0xe4bfd0(0x82)]('volume-controls');
    _0x20c15f && (_0x20c15f['style'][_0xe4bfd0(0x101)] = _0xe4bfd0(0x128));
}
function hideVolumeControls() {
    const _0x77163d = a0_0x2659e9, _0x37eda6 = document[_0x77163d(0x82)]('volume-controls');
    _0x37eda6 && (_0x37eda6[_0x77163d(0xc4)][_0x77163d(0x101)] = 'none');
}
let uiVisible = !![];
function toggleGameUI() {
    const _0x300432 = a0_0x2659e9;
    uiVisible = !uiVisible, uiVisible ? (timerContainer['classList'][_0x300432(0x7f)](_0x300432(0x152)), progressContainer[_0x300432(0x116)][_0x300432(0x7f)](_0x300432(0x152)), messageBox['style'][_0x300432(0x157)] = '1', stageDisplay[_0x300432(0xc4)][_0x300432(0x157)] = '1', livesContainer['style'][_0x300432(0x157)] = '1', showVolumeControls()) : (timerContainer[_0x300432(0x116)][_0x300432(0x89)](_0x300432(0x152)), progressContainer[_0x300432(0x116)]['add']('opacity-0'), messageBox[_0x300432(0xc4)][_0x300432(0x157)] = '0', stageDisplay['style'][_0x300432(0x157)] = '0', livesContainer[_0x300432(0xc4)]['opacity'] = '0', hideVolumeControls());
}
function createConfetti() {
    const _0x4ce793 = a0_0x2659e9, _0x4aeeeb = 0x32, _0x568117 = [
            '#FFD700',
            _0x4ce793(0xe2),
            _0x4ce793(0xdb),
            _0x4ce793(0xe1),
            '#96CEB4',
            '#FFEAA7',
            _0x4ce793(0xa1),
            _0x4ce793(0xc0)
        ];
    for (let _0x5e5252 = 0x0; _0x5e5252 < _0x4aeeeb; _0x5e5252++) {
        const _0x581bf5 = document['createElement'](_0x4ce793(0xa2));
        _0x581bf5[_0x4ce793(0xc4)]['cssText'] = _0x4ce793(0x8c) + _0x568117[Math[_0x4ce793(0x14b)](Math[_0x4ce793(0xb0)]() * _0x568117['length'])] + _0x4ce793(0xe6), document[_0x4ce793(0xc2)][_0x4ce793(0x146)](_0x581bf5);
        const _0x109f1f = Math[_0x4ce793(0xb0)]() * Math['PI'] * 0x2, _0x17703a = 0.2 + Math[_0x4ce793(0xb0)]() * 0.5, _0x3697b5 = 0.02, _0x35384a = Math[_0x4ce793(0xb0)]() * 0x168, _0x111bce = (Math[_0x4ce793(0xb0)]() - 0.5) * 1.5;
        let _0x13c2b6 = 0x0, _0x1715a0 = 0x0, _0xc718cb = Math[_0x4ce793(0x13b)](_0x109f1f) * _0x17703a, _0x41b53b = Math['sin'](_0x109f1f) * _0x17703a - 0.5, _0x4da69c = _0x35384a;
        const _0x4d0a54 = () => {
            const _0x5e87d8 = _0x4ce793;
            _0x13c2b6 += _0xc718cb, _0x1715a0 += _0x41b53b, _0x41b53b += _0x3697b5, _0x4da69c += _0x111bce, _0x581bf5[_0x5e87d8(0xc4)][_0x5e87d8(0x92)] = 0x32 + _0x13c2b6 + '%', _0x581bf5[_0x5e87d8(0xc4)][_0x5e87d8(0x87)] = 0x32 + _0x1715a0 + '%', _0x581bf5['style'][_0x5e87d8(0xfd)] = _0x5e87d8(0x114) + _0x4da69c + _0x5e87d8(0xeb), _0x581bf5[_0x5e87d8(0xc4)][_0x5e87d8(0x157)] = Math[_0x5e87d8(0xee)](0x0, 0x1 - Math['abs'](_0x1715a0) / 0xc8), _0x1715a0 < 0xc8 && _0x581bf5['parentNode'] ? requestAnimationFrame(_0x4d0a54) : _0x581bf5[_0x5e87d8(0xa7)] && _0x581bf5[_0x5e87d8(0xa7)]['removeChild'](_0x581bf5);
        };
        requestAnimationFrame(_0x4d0a54);
    }
}
function showMessage(_0x329317, _0x260f77 = null, _0x3bff17 = a0_0x2659e9(0xdc)) {
    const _0x246d85 = a0_0x2659e9;
    messageBox[_0x246d85(0x112)] = _0x329317, messageBox['style']['color'] = _0x3bff17, messageBox[_0x246d85(0xc4)]['opacity'] = 0x1;
    _0x329317 === _0x246d85(0x134) ? messageBox[_0x246d85(0x96)] = 'text-6xl\x20md:text-8xl\x20font-bold\x20text-yellow-300' : messageBox['className'] = _0x246d85(0x155);
    void messageBox[_0x246d85(0xb6)];
    const _0xf20e31 = new THREE[(_0x246d85(0x139))](0x0, 1.6, 0x0);
    _0xf20e31[_0x246d85(0xbe)](camera);
    const _0x5755c2 = (_0xf20e31['x'] * 0.5 + 0.5) * renderer[_0x246d85(0xd2)][_0x246d85(0x9c)], _0xfe27c3 = (_0xf20e31['y'] * -0.5 + 0.5) * renderer[_0x246d85(0xd2)][_0x246d85(0x11e)];
    messageBox[_0x246d85(0xc4)][_0x246d85(0x92)] = _0x5755c2 + 'px', messageBox['style']['top'] = _0xfe27c3 + 'px';
    switch (_0x260f77) {
    case _0x246d85(0x141):
        messageBox[_0x246d85(0x116)][_0x246d85(0x89)](_0x246d85(0xea));
        break;
    case _0x246d85(0xf8):
        messageBox['classList'][_0x246d85(0x89)]('animate-down');
        break;
    case _0x246d85(0x154):
        messageBox[_0x246d85(0x116)][_0x246d85(0x89)]('animate-left');
        break;
    case 'ArrowRight':
        messageBox[_0x246d85(0x116)][_0x246d85(0x89)](_0x246d85(0xa9));
        break;
    default:
        messageBox[_0x246d85(0xc4)][_0x246d85(0xfd)] = _0x246d85(0xaa);
        break;
    }
}
function updateUI() {
    const _0x2505ee = a0_0x2659e9, _0x392d62 = livesContainer[_0x2505ee(0x117)];
    for (let _0x2e5f91 = 0x0; _0x2e5f91 < _0x392d62['length']; _0x2e5f91++) {
        _0x2e5f91 < lives ? _0x392d62[_0x2e5f91][_0x2505ee(0x116)][_0x2505ee(0x7f)]('lost') : _0x392d62[_0x2e5f91][_0x2505ee(0x116)][_0x2505ee(0x89)]('lost');
    }
    const _0x4ccbff = calculateMemoryIndex(stage);
    stageDisplay[_0x2505ee(0x116)][_0x2505ee(0x7f)](_0x2505ee(0xa3)), void stageDisplay[_0x2505ee(0xb6)], stageDisplay[_0x2505ee(0x112)] = _0x2505ee(0xf9) + _0x4ccbff + _0x2505ee(0xe0), stageDisplay[_0x2505ee(0x116)][_0x2505ee(0x89)]('iq-zoom');
}
function resetGame() {
    const _0x109494 = a0_0x2659e9;
    startScreen[_0x109494(0x116)][_0x109494(0x7f)](_0x109494(0x136)), gameOverScreen[_0x109494(0x116)][_0x109494(0x89)](_0x109494(0x136)), gameState = _0x109494(0xff), lives = 0x3, stage = 0x1, timerContainer[_0x109494(0x116)][_0x109494(0x89)](_0x109494(0x152)), progressContainer[_0x109494(0x116)][_0x109494(0x89)](_0x109494(0x152)), messageBox[_0x109494(0xc4)][_0x109494(0x157)] = '0', stageDisplay[_0x109494(0xc4)][_0x109494(0x157)] = '0', livesContainer[_0x109494(0xc4)][_0x109494(0x157)] = '0', hideVolumeControls(), isWalking = ![], walkAnimationTimer = 0x0, lastIdleAction = 0x0, character && (character[_0x109494(0x8f)][_0x109494(0xb5)](0x0, 0.5, 0x0), character[_0x109494(0x100)]['y'] = 0x0, character[_0x109494(0xf2)][_0x109494(0xb5)](0x1, 0x1, 0x1)), updateUI(), setTimeout(() => {
        const _0x196135 = _0x109494;
        gameState === _0x196135(0xff) && startWalking();
    }, 0x3e8);
}
function onMouseMove(_0x31eb0f) {
    const _0x26a079 = a0_0x2659e9;
    mouse['x'] = _0x31eb0f[_0x26a079(0x10c)] / window[_0x26a079(0x138)] * 0x2 - 0x1, mouse['y'] = -(_0x31eb0f[_0x26a079(0xdd)] / window[_0x26a079(0xec)]) * 0x2 + 0x1;
}
startButton[a0_0x2659e9(0x130)](a0_0x2659e9(0x14a), startGame), retryButton[a0_0x2659e9(0x130)](a0_0x2659e9(0x14a), resetGame), bgmVolumeSlider[a0_0x2659e9(0x130)]('input', _0x484582 => {
    const _0x11a386 = a0_0x2659e9;
    bgm['volume'] = _0x484582[_0x11a386(0xcc)][_0x11a386(0x14c)] / 0x64;
}), sfxVolumeSlider['addEventListener']('input', _0x379f7a => {
    const _0x15e50a = a0_0x2659e9;
    sfxVolume = _0x379f7a[_0x15e50a(0xcc)][_0x15e50a(0x14c)] / 0x64;
}), window[a0_0x2659e9(0x130)](a0_0x2659e9(0x10e), handlePlayerInput), window[a0_0x2659e9(0x130)](a0_0x2659e9(0xa5), () => {
    const _0x1e8316 = a0_0x2659e9;
    camera['aspect'] = canvasContainer[_0x1e8316(0x9c)] / canvasContainer['clientHeight'], camera[_0x1e8316(0x158)](), renderer[_0x1e8316(0x8d)](canvasContainer['clientWidth'], canvasContainer[_0x1e8316(0x11e)]);
}), window[a0_0x2659e9(0x130)]('mousemove', onMouseMove), document['querySelectorAll'](a0_0x2659e9(0x9b))[a0_0x2659e9(0x135)](_0x9c9e0a => {
    const _0x161376 = a0_0x2659e9;
    _0x9c9e0a[_0x161376(0x130)]('click', _0x4c06ff => {
        const _0x24d27f = _0x161376, _0x4f9426 = _0x4c06ff[_0x24d27f(0xcf)][_0x24d27f(0xfa)](_0x24d27f(0x90)), _0x1ff897 = new KeyboardEvent(_0x24d27f(0x10e), {
                'key': _0x4f9426,
                'code': _0x4f9426,
                'keyCode': _0x4f9426 === _0x24d27f(0x141) ? 0x26 : _0x4f9426 === _0x24d27f(0xf8) ? 0x28 : _0x4f9426 === _0x24d27f(0x154) ? 0x25 : 0x27,
                'which': _0x4f9426 === _0x24d27f(0x141) ? 0x26 : _0x4f9426 === _0x24d27f(0xf8) ? 0x28 : _0x4f9426 === _0x24d27f(0x154) ? 0x25 : 0x27,
                'bubbles': !![],
                'cancelable': !![]
            });
        handlePlayerInput(_0x1ff897);
    });
}), init3D(), document[a0_0x2659e9(0x82)]('start-button')[a0_0x2659e9(0x116)][a0_0x2659e9(0x89)](a0_0x2659e9(0xed)), livesContainer['style'][a0_0x2659e9(0x157)] = '0', hideVolumeControls(), bgmVolumeSlider[a0_0x2659e9(0x14c)] = BGM_DEFAULT_VOLUME, sfxVolumeSlider[a0_0x2659e9(0x14c)] = SFX_DEFAULT_VOLUME;