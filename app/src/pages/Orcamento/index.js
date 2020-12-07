import React, { useState } from 'react';
import { ActivityIndicator, Alert } from 'react-native';

import api from '../../config/api';

import { ScrollView} from 'react-native-gesture-handler';
import { Container, TitleInput, InputForm, BtnSubmitForm, 
TxtSubmitForm, TitleRequired, LoadingArea } from './styles';


export default function Orcamento() {

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ whatsApp, setWhatsApp ] = useState('');
    const [ msg, setMsg ] = useState('');
    const [loading, setLoading ] = useState(false);


    const cadOrcamento = async () => {
        // Alert.alert('', 'Enviar para Api'  + name);
        // if(!validade()) return;

        setLoading(true);

        await api.post('/orcamento', {name, email, phone, whatsApp, msg})
        .then((response) => {
            Alert.alert(' ', response.data.message);
            setLoading(false);
        }).catch((err) => {
            if(err.response) {
                Alert.alert(' ', err.response.data.message);
                setLoading(false);
            }else {
                Alert.alert(' ', 'Erro: Solicitação de orçamento não enviado com sucesso, tente mais tarde!');
                setLoading(false);
            }
        });
    }

    const validade = () => {
        if(!name) {
            Alert.alert('', 'preencha o campo Nome!');
            return false;
        }
        if(!email) {
            Alert.alert('', 'preencha o campo E-mail!');
            return false;
        }
        if(!phone) {
            Alert.alert('', 'preencha o campo Telefone!');
            return false;
        }
        if(!whatsApp) {
            Alert.alert('', 'preencha o campo WhatsApp!');
            return false;
        }
        if(!msg) {
            Alert.alert('', 'preencha o campo Conteudo!');
            return false;
        }

        return true;
    }

    return (
        <ScrollView contentContainerStyle = { {flexGrow: 1}}>
            <Container>
                <TitleInput>* Nome</TitleInput>
                <InputForm 
                    placeholder="Nome Completo" 
                    value={name}
                    editable={!loading}
                    onChangeText={text => setName(text)}
                />
                <TitleInput>* E-mail</TitleInput>
                <InputForm 
                    placeholder="Seu melhor e-mail" 
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    editable={!loading}
                    onChangeText={text => setEmail(text)}
                />
                <TitleInput>* Telefone</TitleInput>
                <InputForm 
                    placeholder="(xx) xxxx xxxx" 
                    value={phone}
                    editable={!loading}
                    onChangeText={text => setPhone(text)}
                />
                <TitleInput>* WhatsApp</TitleInput>
                <InputForm 
                    placeholder="(xx) xxxx xxxx" 
                    value={whatsApp}
                    editable={!loading}
                    onChangeText={text => setWhatsApp(text)}
                />
                <TitleInput>* Conteudo</TitleInput>
                <InputForm 
                    placeholder="Fale um pouco do seu projeto" 
                    value={msg}
                    editable={!loading}
                    onChangeText={text => setMsg(text)}
                />
                <TitleRequired>* Campo obrigatorio</TitleRequired>

                <BtnSubmitForm disabled={loading} onPress={cadOrcamento}>
                    <TxtSubmitForm>
                        Enviar
                    </TxtSubmitForm>
                </BtnSubmitForm>

            {loading &&
                <LoadingArea>
                    <ActivityIndicator size="large" color="#fff"/>
                </LoadingArea>
            }
            </Container>
        </ScrollView>
    );
}