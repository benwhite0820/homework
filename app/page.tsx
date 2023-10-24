'use client';

import './page.style.scss';
import React from 'react';
import InputLabel from '@/components/input-label/input.component';
import Header from '@/components/header/header.component';
import RadioLabel from '@/components/radio-label/radio.component';
import Button from '@/components/button/button.component';
import { getIsInputValid } from '@/lib/checkValidInfo';
import Label from '@/components/label/label.component';

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
    const { name, value } = event.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
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

  const handleResetInput = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setUserInfo({
      firstName: '',
      lastName: '',
      firstNameKatakana: '',
      lastNameKatakana: '',
      gender: '',
      age: '',
    });
    setIsFormComplete(false);
  };

  return (
    <main className="container">
      <form
        onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
        }}
      >
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
          <div className="gender-age-box__gender">
            <Label className="gender-age-box__gender-title" required>
              性別
            </Label>
            <RadioLabel
              label="男性"
              name="gender"
              id="male"
              onChange={handleOnChange}
              value="male"
              onBlur={handleIsFormCompleteOnBlur}
              checked={userInfo.gender === 'male'}
            />
            <RadioLabel
              label="女性"
              name="gender"
              id="female"
              onChange={handleOnChange}
              value="female"
              onBlur={handleIsFormCompleteOnBlur}
              checked={userInfo.gender === 'female'}
            />
            <RadioLabel
              label="無回答・その他"
              name="gender"
              id="others"
              onChange={handleOnChange}
              value="others"
              onBlur={handleIsFormCompleteOnBlur}
              checked={userInfo.gender === 'others'}
            />
          </div>
          <InputLabel
            label="年齢"
            required
            name="age"
            inputClassName="gender-age-box__age"
            value={userInfo.age}
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
          <Button buttonColor={isFormComplete ? 'success' : 'default'}>
            次へ
          </Button>
          <Button buttonColor="cancel" onClick={handleResetInput}>
            戻る
          </Button>
        </div>
      </form>
    </main>
  );
}
