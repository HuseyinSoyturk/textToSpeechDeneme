import { useEffect, useState } from 'react'
import { Button, Input, Upload } from 'antd';
import './App.css'
import Speech from 'speak-tts'
import { UploadOutlined } from '@ant-design/icons';
const { TextArea } = Input;


function App() {
  const [value, setvalue] = useState('')
  const [file, setFile] = useState();
  const speech = new Speech()
  const reader = new FileReader()
  reader.onload = function (e) {
    setvalue(e.target.result)
  };

  speech.setLanguage('tr-TR')


  useEffect(() => {


    speech.init({
      volume: 1,
      lang: "tr-TR",
      rate: 0.9,
      pitch: 1,
    }).then(() => {
      speech.speak({
        text: 'Naber Furkan ve Onur Kankalar Alana Yazı Yazın ve Butona Tıklayın',
      }).then(() => {
        console.log("Success !")
      }).catch(e => {
        console.error("An error occurred :", e)
      })
    })
  }, [])

  const zart = () => {
    speech.speak({
      text: value,
    }).then(() => {
      console.log("Success !")
    }).catch(e => {
      console.error("An error occurred :", e)
    })
  }

  const props = {
    onRemove: () => {
      setFile(null)
    },
    beforeUpload: (file) => {
      setFile(file)
      console.log(file);
      reader.readAsText(file)
      return false;
    },
    file,
  };

  return (
    <>
      <Upload {...props} accept='text/*' maxCount={1}>
        <Button style={{ width: '100%' }} icon={<UploadOutlined />}>TXT Import</Button>
      </Upload>
      <TextArea value={value} onChange={(e) => setvalue(e.target.value)} rows={4} />
      <Button style={{ width: '100%' }} type="primary" onClick={zart}>Yaratan Rabbinin Adiyla Oku !!!</Button>

    </>
  )
}

export default App
