/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Image, StatusBar, Text, View, TextInput, TouchableOpacity} from 'react-native';
import TextBox from "./src/components/TextBox.js";

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{flex: 1, backgroundColor: '#dbe4f3'}}>
      <StatusBar backgroundColor={'red'} barStyle={'dark-content'} />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('./src/image/logo.png')}
          style={{width: 200, height: 200, marginTop:80}}
        />
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#2396f2'}}>
          FENDI
            <Text style={{color: 'red'}}> 
          HIDAYAT</Text>
        </Text>
        <Text style={{marginTop: 10, fontWeight: 'bold'}}>Silahkan Login Dahulu</Text>
      </View>

      <TextBox email={email} setEmail={setEmail} placeholder="Email" isPassword={false}/>
      <TextBox email={password} setEmail={setPassword} placeholder="Password" isPassword={true} />

      <TouchableOpacity style={{
        backgroundColor: '#2396f2',
        paddingVertical: 14,
        marginTop: 20,
        marginHorizontal:20,
        borderRadius:15,
        elevation:2,
      }}>
        <Text style={{color:'#ffffff', textAlign: 'center'}}>Login</Text>
      </TouchableOpacity>


      <View style={{marginHorizontal:20, flexDirection:'row', marginTop: 10}}>
        <TouchableOpacity style={{flex: 1 }}>
          <Text style={{fontWeight:'bold'}}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={{flex: 1, justifyContent:'center', alignItems:'flex-end'
        }}>
          <Text>Forgot Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
