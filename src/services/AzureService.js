import RNFetchBlob from 'react-native-fetch-blob';

export const upload = path => {
  RNFetchBlob.fetch(
    'PUT',
    'https://storagediscadorquilmes.blob.core.windows.net/test/image.png?sp=c&sv=2015-04-05&sr=b&se=2018-04-30T02%3A23%3A26Z&sig=%2FSHtQgCoXxfDI%2F0k0wzVDOddk8k%2BdTjfSc18Oj9hBgw%3D',
    {
      'x-ms-blob-type': 'BlockBlob',
      'Content-Type': 'application/octet-stream'
    },
    RNFetchBlob.wrap(path)
  )
    .then(res => {
      console.log(res);
      debugger;
    })
    .catch(err => {
      console.log(err);
      debugger;
    });
};
