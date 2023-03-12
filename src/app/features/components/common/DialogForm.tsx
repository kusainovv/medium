import styled from '@emotion/styled';
import React, {useEffect, useState} from 'react';
import io from 'socket.io-client';

const Wrapper = styled.div``;
const Form = styled.form``;
const Textarea = styled.textarea`
    outline: none;
    resize: none;
    background-color: antiquewhite;
    border-bottom: 1px solid black;
`;

const Message = styled.div`
    display: flex;
    justify-content: flex-start;
`;

const Profile = styled.p``;
const Text = styled.p``;

const UserInput = styled.div``;

export const DialogForm = () => {
	const socket = io('http://localhost:2020');

	const [messageValue, setMessageValue] = useState('');
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		socket.on('receive_message', data => {
			setMessages([...messages, data]);
		});
	}, [socket]);

	return <Wrapper>
		<Form onSubmit={e => {
			e.preventDefault();
		}}>
			{
				messages.map(message => <Message key={message}>
					{/* <Profile>{message}</Profile> */}
					<Text>{message}</Text>
				</Message>)
			}

			<UserInput>
				<Textarea onChange={e => {
					setMessageValue(e.target.value);
				}}>

				</Textarea>
				<button onClick={() => {
					setMessageValue('');
					socket.emit('send_message', messageValue);
				}}>
                    send
				</button>
			</UserInput>
		</Form>
	</Wrapper>;
};

