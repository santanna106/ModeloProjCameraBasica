import React,{useState} from 'react';
import { View,Text,StatusBar,StyleSheet, TouchableOpacity,Modal } from 'react-native';
import {RNCamera } from 'react-native-camera'

export default function  Camera() {
  const [type,setType] = useState(RNCamera.Constants.Type.back);
  const [open,setOpen] = useState(false);

  function takePicture(){
    setOpen(true);
  }

 return (
   
    <View style={styles.container}>
      <StatusBar hidden={true}/>
      <RNCamera 
        style={styles.preview}
        type={type}
        flashMode={RNCamera.Constants.FlashMode.auto}
        androidCameraPermissionOptions={{
          title: 'Permissão para utilizar a câmera',
          message:'Nós precisamos usar a sua câmera',
          buttonPositive:'Ok',
          buttonNegative:'Cancelar'
        }}
      >
        {({camera,status,recordAndroidPermissionStatus}) => {
          if(status !== 'READY') return <View/>;
          return (
            <View style={{marginBottom:35, flexDirection: 'row',alignItems:'flex-end',justifyContent:'space-between'}}>
                <TouchableOpacity
                  onPress={() => { takePicture()}}
                  style={styles.capture}
                >
                  <Text>Tirar Foto</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {}}
                  style={styles.capture}
                >
                  <Text>Album</Text>
                </TouchableOpacity>
            </View>
          )
        }}
      </RNCamera>

      <Modal animationType='slide' transparent={false} visible={open}>
        <View style={{flex:1,justifyContent:'center',alignItems:'center',margin:20}}>
          <TouchableOpacity 
           style={{margin:10}}
           onPress={() => setOpen(false)}>
            <Text style={{fontSize:25}}>Fechar</Text>
          </TouchableOpacity>
        </View>

      </Modal>
    </View>
  
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
  },
  preview:{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center'
  },
  capture:{
    flex:0,
    backgroundColor:'#FFF',
    borderRadius:5,
    padding:15,
    paddingHorizontal:20,
    alignSelf:'center',
    margin:20,
  }
})