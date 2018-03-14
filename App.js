import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Image, TouchableOpacity, Text, Alert } from 'react-native';
import { Card } from 'react-native-elements';
import { Location, Permissions, FileSystem } from 'expo';
export default class App extends Component {
  state = {
    location: null,
    errorMessage: null,
  };
  cont1 = 0;
  cont2 = 0;
  cont3 = 0;
  cont4 = 0;
  cont5 = 0;

  sumar(valor) {

    return valor;
  }

  componentWillMount() {
    this._getLocationAsync();
    window.requestFileSystem;
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'Permiso de ubicación otorgado') {
      this.setState({
        errorMessage: 'Permiso de ubicación denegado',
      });
    }
    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  ///////////////////////////////////////////////////////////////////////////

  render() {
    return (

      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>

        <TouchableOpacity style={styles.button} title="Boton" onPress={() => {
          Alert.alert(
            'Confirmación',
            'Ha elegido: \'Me enoja\'. ¿Está seguro de su elección?',
            [
              { text: 'Cancelar' },
              { text: 'Si', onPress: () => console.log('Enoja') },
            ],
            { cancelable: false }
          )
        }}>
          <Image style={{ width: 120, height: 120 }}
            source={{ uri: 'https://static.wixstatic.com/media/c3299d_332cf3ba980f48e2b396de5aec3e19ca~mv2.png/v1/fill/w_151,h_134,al_c/c3299d_332cf3ba980f48e2b396de5aec3e19ca~mv2.png' }} />
        </TouchableOpacity>


        <TouchableOpacity style={styles.button} title="Boton" onPress={() => {
          Alert.alert(
            'Confirmación',
            'Ha elegido \'No me gusta\'. ¿Está seguro de su elección?',
            [
              { text: 'Cancelar' },
              { text: 'Si', onPress: () => console.log('No gusta') },
            ],
            { cancelable: false }
          )
        }}>
          <Image style={{ width: 120, height: 120 }}
            source={{ uri: 'https://static.wixstatic.com/media/c3299d_0faba6a7afc04075a369128c3b3565bd~mv2.png/v1/fill/w_142,h_138,al_c/c3299d_0faba6a7afc04075a369128c3b3565bd~mv2.png' }} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} title="Boton" onPress={() => {
          Alert.alert(
            'Confirmación',
            'Ha elegido \'Neutro\'. ¿Está seguro de su elección?',
            [
              { text: 'Cancelar' },
              { text: 'Si', onPress: () => console.log('Neutro') },
            ],
            { cancelable: false }
          )
        }}>
          <Image style={{ width: 120, height: 120 }}
            source={{ uri: 'https://static.wixstatic.com/media/c3299d_7ec42241064045ef820e18ee93efd0ef~mv2.png/v1/fill/w_151,h_134,al_c/c3299d_7ec42241064045ef820e18ee93efd0ef~mv2.png' }} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} title="Boton" onPress={() => {
          Alert.alert(
            'Confirmación',
            'Ha elegido \'Me gusta\'. ¿Está seguro de su elección?',
            [
              { text: 'Cancelar' },
              { text: 'Si', onPress: () => console.log('Gusta') },
            ],
            { cancelable: false }
          )
        }}>
          <Image style={{ width: 120, height: 120 }}
            source={{ uri: 'https://static.wixstatic.com/media/c3299d_d611f250f7974b7fa8ccf1ed150f7e21~mv2.png/v1/fill/w_156,h_130,al_c/c3299d_d611f250f7974b7fa8ccf1ed150f7e21~mv2.png' }} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} title="Boton" onPress={() => {
          Alert.alert(
            'Confirmación',
            'Ha elegido \'Me encanta\'. ¿Está seguro de su elección?',
            [
              { text: 'Cancelar' },
              { text: 'Si', onPress: () => console.log('Encanta') },
            ],
            { cancelable: false }
          )
        }}>
          <Image style={{ width: 120, height: 120 }}
            source={{ uri: 'https://static.wixstatic.com/media/c3299d_89a881ae4eb845098a55b508bb6b9213~mv2.png/v1/fill/w_151,h_137,al_c/c3299d_89a881ae4eb845098a55b508bb6b9213~mv2.png' }} />
        </TouchableOpacity>

        <Text>



        </Text>
      </View>

    );

  }

}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#e8e8e8',
    borderRadius: 200,
    padding: 4,
    marginBottom: 0

    /* shadowColor: '#303838',
     shadowOffset: { width: 0, height: 5 },
     shadowRadius: 10,
     shadowOpacity: 0.45,*/
  }
});