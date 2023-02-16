import {type Action, type ThunkDispatch} from '@reduxjs/toolkit';
import React from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {Popup} from '../../../../../core/components/Popup';
import {closePopup, showPopup} from '../../../../../store/slice/popup';
import {type RootState} from '../../../../../store/store';

export const ArticleProfile = () => {
	const isPopup = useSelector((state: RootState) => state.popup.isPopup);
	const dispatch = useDispatch<ThunkDispatch<undefined, undefined, Action>>();
	return <div className={`
        ml-5
        max-m:hidden
    `}>
		<div className={`
            w-[88px]
            h-[88px]
            mb-2
            rounded-full
            bg-amber-500
        `}></div>
		<h4 className={`
            text-base
        `}>Ratmir Kusainov</h4>
		<p className={`
            text-sm
            w-fit
            underline
            cursor-pointer
        `} onClick={() => {
			dispatch(showPopup());
		}}>Edit profile</p>

		<Popup backgroundColorCloseZone='rgb(0,0,0,0.6)' isOpened={isPopup} onCloseHandler={() => {
			dispatch(closePopup());
		}} transition='1s' backgroundContent='white'>
			<div className={`
                p-5
            `}>
				<input type='text' placeholder='Name' />
				<input type='text' placeholder='Password' />
				<input type='text' placeholder='Image' />
			</div>
		</Popup>
	</div>;
};
