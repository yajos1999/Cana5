jwplayer('playerAJxJyoaBJaaN').setup({
    file: 'https://linear-351.frequency.stream/mt/studio/351/hls/master/playlist.m3u8',
    title: 'CANAL 5 GRATIS',
    width: '100%',
    aspectratio: '16:9',
    mute: 'true',
    autostart: 'true',
    hlshtml: true,
    preload: 'metadata', // Cambiamos de 'auto' a 'metadata' para cargar solo los metadatos del vídeo inicialmente
    androidhls: true,
    hlsjs: true
});
