import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import download from '../../../assets/images/cloud_download.png';
import description from '../../../assets/images/description.png';
import ImagePicker from 'react-native-image-crop-picker';
import DocumentPicker from 'react-native-document-picker';
import {TouchableOpacity} from 'react-native-gesture-handler';
import RNFS from 'react-native-fs';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const Report = () => {
  const [documentUri, setDocumentUri] = useState(null);
  const [documentName, setDocumentName] = useState('');

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });

      console.log('Document Picker Result:', result); // Log the entire result object

      // Check if result has the expected properties
      if (result && result[0] && result[0].uri) {
        setDocumentUri(result[0].uri);
        setDocumentName(result[0].name);
  
        // Log the document name
        console.log('Document Name:', result[0].name);
      } else {
        console.error('Document URI is undefined');
      }
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('User cancelled document selection');
      } else {
        console.error('Error picking a document', error);
      }
    }
  };


  return (
    <View style={styles.mainContainer}>
      <View style={styles.box}>
        <View style={styles.insidebox}>
          <View style={styles.imageBox}>
            <Image source={description} />
          </View>
          <Text style={styles.downloadTxt}>{documentName}</Text>
        </View>
        <TouchableOpacity onPress={pickDocument}>
          <Image source={download} />
        </TouchableOpacity>
      </View>      
    </View>
  );
};

export default Report;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    padding: moderateScale(30), 
    gap: verticalScale(20), 
  },
  box: {
    width: moderateScale(335), 
    height: verticalScale(70), 
    borderColor: '#9E77ED',
    borderWidth: 1,
    borderRadius: moderateScale(8), 
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: moderateScale(20), 
  },
  insidebox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: moderateScale(10), 
  },
  downloadTxt: {
    fontFamily: 'Poppins-Regular',
    fontSize: moderateScale(14), 
  },
  imageBox: {
    width: moderateScale(38), 
    height: moderateScale(38), 
    backgroundColor: '#978CD0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(20),
  },
});
