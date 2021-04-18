import React, { useLayoutEffect } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Platform, Image, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CompleteButton } from '../components/CompleteButton';
import theme from '../theme';
import { MAN_STRONG_ONE_PNG } from '../../assets/imgs/images';
import { MAN_STRONG } from '../../assets/gifs/gifs';

export const WelcomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, []);

  const TextButton = ({ text, onPress }) => {
    return (
      <TouchableOpacity style={{marginTop: 15}} onPress={onPress} activeOpacity={theme.ACTIVE_OPACITY}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    )
  }

  const AdvantageText = ({ text }) => {
    return (
      <View style={styles.advantageWrapper}>
        <Ionicons name="md-checkmark-circle" size={22} color="white"/>
        <Text style={styles.text}> {text}</Text>
      </View>
    )
  }

  const PriceContainer = ({ price, subscriptionTime, pricePerMonth, isSelected, isProfit }) => {
    return (
      <View style={[
        styles.priceContainer, 
        isSelected ? styles.priceSelected : null, 
        isProfit ? {
          paddingTop: 30
        } : null 
      ]}>
        { isProfit ? 
          <View style={styles.priceProfitContainer}>
            <Text style={{...styles.text, ...styles.priceProfitText}}>Выгодно</Text>
          </View> 
          : null
        }
        <Text style={{...styles.text, fontFamily: 'norms-medium', fontSize: 16}}>{ price }</Text>
        <Text style={{...styles.text, ...styles.textDescription, marginVertical: 10}}>{ subscriptionTime }</Text>
        <Text style={{...styles.text, fontFamily: 'norms-medium'}}>{ pricePerMonth }</Text>
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={styles.welcomeScreenContainer}>
        <View style={styles.imgContainer}>
          <Image source={{uri: MAN_STRONG_ONE_PNG}} style={styles.img}/>
        </View>

        <View style={styles.headerContainer}>
          <Text style={styles.header}>Инвестируй в физическое здоровье!</Text>
        </View>

        {/* <View>
          <Text></Text>
        </View> */}

        <View style={styles.advantageContainer}>
          <View>
            <AdvantageText text="Полная кастомизация тренировок и упражнений"/>
            <AdvantageText text="Примеры различных упражнений"/>
            <AdvantageText text="Новые иллюстрации каждую неделю"/>
            {/* <AdvantageText text=""/> */}
          </View>
        </View>

        <View style={styles.priceWrapper}>
          <PriceContainer price="2,99 $" subscriptionTime="1 месяц" pricePerMonth="2,99 $/ мес." />
          <PriceContainer price="25,99 $" subscriptionTime="1 год" pricePerMonth="2,17 $/ мес." isSelected isProfit/>
          <PriceContainer price="15,49 $" subscriptionTime="6 месяцев" pricePerMonth="2,56 $/ мес." isSelected/>
        </View>

        <CompleteButton buttonText="Продолжить" isBorder={false} isWhite onPress={() => navigation.navigate("Home")}/>

        <View style={styles.descriptionWrapper}>
          <Ionicons name="md-shield-checkmark-outline" size={14} color="white"/>
          <Text style={styles.text}> Защищено с помощью Google Pay. Отмена в любое время</Text>
          {/* <Text style={styles.welcomeScreenText}> Secured with Google Pay. Cancel anytime</Text> */}
        </View>

        <Text style={{...styles.text, ...styles.textDescription}}>
          Оплата будет произведена с вашего Google-аккаунта. Подписка автоматически продлевается за 24 часа до истечения срока действия. Если вы хотите отменить подписку, то вам необходимо сделать это в настройках вашего Google-аккаунта не позднее чем за 24 часа до истечения срока действия подписки.
        </Text>

        <View style={styles.wrapper}>
          <TextButton text="Пользовательское соглашение" onPress={() => {}} />
          <TextButton text="Политика конфиденциальности" onPress={() => {}} />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  welcomeScreenContainer: {
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  descriptionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15
  },
  wrapper: {
    marginTop: 15,
  },

  priceWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 10
  },
  priceContainer: {
    backgroundColor: 'rgba(255, 255, 255, .1)',
    marginHorizontal: 5,
    paddingVertical: 20,
    width: 110,
    borderRadius: 10,
  },
  priceProfitContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 7.5,
    position: 'absolute',
    top: -15,
    alignSelf: 'center'
  },
  priceProfitText: {
    color: "#000",
    fontFamily: 'norms-medium',
    fontSize: Platform.OS == "android" ? 12 : 14,
  },
  priceSelected: {
    borderColor: "#fff",
    borderWidth: 2,
  },

  advantageContainer: {
    width: '100%',
    // backgroundColor: 'blue',
    marginTop: 15,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  advantageWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerContainer: {
    marginBottom: 10
  },
  header: {
    color: "#fff",
    fontFamily: 'norms-bold',
    fontSize: 20,
    textTransform: 'uppercase',
  },

  text: {
    color: "#fff",
    fontFamily: 'norms-regular',
    textAlign: "center",
    textAlignVertical: "bottom",
    fontSize: Platform.OS == "android" ? 12 : 14,
  },
  textDescription: {
    fontSize: Platform.OS == 'android' ? 11 : 13,
    opacity: .5,
  },

  imgContainer: {
    width: "100%",
    height: 225,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: 'center'
  },
  img: {
    flex: 1,
    width: "80%",
    height: "100%",
  }
})