import * as React from 'react';
import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
  Image,
  Switch,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [isName, setIsName] = useState('');
  const [isIdade, setIsIdade] = useState('');
  const [isSexo, setIsSexo] = useState('');
  const [isEscolaridade, setIsEscolaridade] = useState('');
  const [isLimite, setIsLimite] = useState();
  const [isBrasileiro, setIsBrasileiro] = useState(false);
  const [isExibir, setIsExibir] = useState(false);

  function calcular() {
    setIsExibir(true);
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={{ marginTop: '25%', fontSize: 30 }}> 
          Abertura de Conta
        </Text>

        <View style={styles.centerView}>
          <Text>Nome: </Text>
          <TextInput
            style={styles.input}
            onChangeText={(name) => setIsName(name)}
          />
        </View>

        <View style={styles.centerView}>
          <Text>Idade: </Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(numero) => setIsIdade(numero)}
          />
        </View>

        <Picker
          selectedValue={isSexo}
          onValueChange={(itemValue, itemIndex) => setIsSexo(itemValue)}>
          <Picker.Item key={1} value={0} label="Selecione" />
          <Picker.Item key={2} value={'M'} label="Masculino" />
          <Picker.Item key={3} value={'F'} label="Femenino" />
        </Picker>

        <Picker
          selectedValue={isEscolaridade}
          onValueChange={(itemValue, itemIndex) =>
            setIsEscolaridade(itemValue)
          }>
          <Picker.Item key={0} value={0} label="Selecione" />
          <Picker.Item key={1} value={'E.M.C'} label="Ensino médio completo" />
          <Picker.Item
            key={2}
            value={'E.M.I'}
            label="Ensino médio incompleto"
          />
          <Picker.Item
            key={3}
            value={'E.S.C'}
            label="ensino superior completo"
          />
          <Picker.Item
            key={4}
            value={'E.S.I'}
            label="ensino superior incompleto"
          />
        </Picker>

        <Slider
          minimumValue={0}
          maximumValue={100}
          onValueChange={(valorSelecionado) =>
            setIsLimite(Math.round(valorSelecionado))
          }
          value={isLimite}
        />

        <Switch
          value={isBrasileiro}
          onValueChange={() => {
            setIsBrasileiro(!isBrasileiro);
          }}
        />

        <Pressable style={styles.btn} onPress={calcular}>
          <Text>Confirmar</Text>
        </Pressable>

        {isExibir ?  <> 
        <Text style={{ marginTop: '5%', fontSize: 25 }}>Dados informados:</Text>
        <Text style={{ marginTop: '5%', fontSize: 20 }}>Nome:{isName}</Text>
        <Text style={{ marginTop: '5%', fontSize: 20 }}>Idade:{isIdade}</Text>
        <Text style={{ marginTop: '5%', fontSize: 20 }}>Sexo:{isSexo}</Text>
        <Text style={{ marginTop: '5%', fontSize: 20 }}>
          Escolaridade:{isEscolaridade}
        </Text>
        <Text style={{ marginTop: '5%', fontSize: 20 }}>Limite:{isLimite}</Text>
        <Text style={{ marginTop: '5%', fontSize: 20 }}>
          Brasileiro:{isBrasileiro ? 'Sim' : 'Não'}
        </Text> </>
        : 
        ""}

        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 20,
    backgroundColor: 'green',
  },
  input: {
    width: 200,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'black',
    textAlign: 'center',
  },
  centerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
