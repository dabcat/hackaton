import React, { Component } from 'react';
import 'react-chat-elements/dist/main.css';
import { MessageBox, MessageList } from 'react-chat-elements';
import Headline from '../Headline/Headline';
import Layout from '../../components/Layout/Layout';
import Header from '../Header/Header';

class ConversationTwo extends Component {
    render() {
        return (
            <Layout>
                <Header></Header>
                <div>
                    <Headline>
                        Conversation with Ratko
                    </Headline>
                    <MessageList
                        className='message-list'
                        lockable={true}
                        toBottomHeight={'100%'}
                        dataSource={[
                            {
                                position: 'left',
                                type: 'text',
                                text: 'Hey there! The question says it all, not having huge progress. Any tips?',
                                date: new Date('19/February/2019'),
                            },
                            {
                                position: 'right',
                                type: 'text',
                                text: 'Hey, first of all we should take a look at how and what you train. Do you have your trainings schedule for me?',
                                date: new Date('20/February/2019'),
                            },
                            {
                                position: 'left',
                                type: 'text',
                                text: 'Yes, one second ...',
                                date: new Date('21/February/2019'),
                            },
                        ]} />
                    <MessageBox
                        position={'left'}
                        type={'photo'}
                        text={'react.svg'}
                        date={new Date('21/February/2019')}
                        data={{
                            uri: 'https://facebook.github.io/react/img/logo.svg',
                            status: {
                                click: false,
                                loading: 0,
                            },
                        }} />
                </div>
            </Layout>
        );
    }
}

export default ConversationTwo;