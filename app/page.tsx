'use client';

import './page.style.scss';
import React from 'react';
import InputLabel from '@/components/input-label/input.component';
import Header from '@/components/header/header.component';
import Label from '@/components/label/label.component';
import RadioLabel from '@/components/radio-label/radio.component';
import Button from '@/components/button/button.component';
import { getIsInputValid } from '@/lib/checkValidInfo';

export default function Home() {
  const [userInfo, setUserInfo] = React.useState<{ [key in string]: string }>({
    firstName: '',
    lastName: '',
    firstNameKatakana: '',
    lastNameKatakana: '',
    gender: '',
    age: '',
  });

  const [isFormComplete, setIsFormComplete] = React.useState(false);

  const patterns = {
    infoPattern: /^[A-Za-z]+$/,
    agePattern: /^[0-9]+$/,
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    setUserInfo({
      ...userInfo,
      [name]: event.target.value,
    });
  };

  const handleIsFormCompleteOnBlur = () => {
    if (!Object.values(userInfo).every((val) => val !== ''))
      return setIsFormComplete(false);

    for (const key in userInfo) {
      const regPattern =
        key === 'age' ? patterns.agePattern : patterns.infoPattern;

      if (!regPattern.test(userInfo[key])) return setIsFormComplete(false);
    }

    return setIsFormComplete(true);
  };

  return (
    <main className="container">
      <form>
        <Header>あなたの情報を入力してください</Header>
        <div className="name-box">
          <Header>名前</Header>
          <InputLabel
            label="姓"
            required
            name="firstName"
            onChange={handleOnChange}
            value={userInfo.firstName}
            onBlur={handleIsFormCompleteOnBlur}
            invalidMessage={'記号・数字は使用できません'}
            isValid={getIsInputValid({
              toBeCheckedValue: userInfo.firstName,
              regPattern: patterns.infoPattern,
            })}
          />
          <InputLabel
            label="名"
            required
            name="lastName"
            onChange={handleOnChange}
            value={userInfo.lastName}
            onBlur={handleIsFormCompleteOnBlur}
            invalidMessage={'記号・数字は使用できません'}
            isValid={getIsInputValid({
              toBeCheckedValue: userInfo.lastName,
              regPattern: patterns.infoPattern,
            })}
          />
          <InputLabel
            label="氏（カタカナ）"
            required
            name="firstNameKatakana"
            onChange={handleOnChange}
            value={userInfo.firstNameKatakana}
            onBlur={handleIsFormCompleteOnBlur}
            invalidMessage={'記号・数字は使用できません'}
            isValid={getIsInputValid({
              toBeCheckedValue: userInfo.firstNameKatakana,
              regPattern: patterns.infoPattern,
            })}
          />
          <InputLabel
            label="名（カタカナ）"
            required
            name="lastNameKatakana"
            onChange={handleOnChange}
            value={userInfo.lastNameKatakana}
            onBlur={handleIsFormCompleteOnBlur}
            invalidMessage={'記号・数字は使用できません'}
            isValid={getIsInputValid({
              toBeCheckedValue: userInfo.lastNameKatakana,
              regPattern: patterns.infoPattern,
            })}
          />
        </div>
        <div className="gender-age-box">
          <Header>年齢・性別</Header>
          <div>
            <Label required>性別</Label>
            <RadioLabel
              label="男性"
              name="gender"
              id="male"
              onChange={handleOnChange}
              value="male"
              onBlur={handleIsFormCompleteOnBlur}
            />
            <RadioLabel
              label="女性"
              name="gender"
              id="female"
              onChange={handleOnChange}
              value="female"
              onBlur={handleIsFormCompleteOnBlur}
            />
            <RadioLabel
              label="無回答・その他"
              name="gender"
              id="others"
              onChange={handleOnChange}
              value="others"
              onBlur={handleIsFormCompleteOnBlur}
            />
          </div>
          <div>
            <InputLabel
              label="年齢"
              required
              name="age"
              inputClassName="gender-age-box__age"
              onChange={handleOnChange}
              onBlur={handleIsFormCompleteOnBlur}
              invalidMessage={'半角数字以外は使用できません'}
              isValid={getIsInputValid({
                toBeCheckedValue: userInfo.age,
                regPattern: patterns.agePattern,
              })}
            />
          </div>
          <div className="button-box">
            <Button type={isFormComplete ? 'success' : 'default'}>次へ</Button>
            <Button type="cancel">戻る</Button>
          </div>
        </div>
      </form>
    </main>
  );
}
