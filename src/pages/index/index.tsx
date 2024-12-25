import { View, Text, Button } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  const handleClick = async () => {
    Taro.showToast({
      title: 'See Console Logs',
      icon: 'none',
    })
    
    const audioCtx = Taro.createWebAudioContext();
    console.log('Start decoding audio data...');
    // @ts-expect-error
    const result = audioCtx.decodeAudioData(new ArrayBuffer(0), (buffer) => {
      console.log('Decoded audio data:', buffer);
    });
    console.log('direct result:', result);
    // @ts-expect-error
    console.log('promise result:', await (result as Promise<AudioBuffer>));
   }

  return (
    <View className='index'>
      <Button onClick={handleClick}>Test API</Button>
    </View>
  )
}
