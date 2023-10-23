import './page.style.scss';
import InputLabel from '@/components/input-label/input.component';
import Header from '@/components/header/header.component';
import Label from '@/components/label/label.component';
import RadioLabel from '@/components/radio-label/radio.component';

export default function Home() {
  return (
    <main className="container">
      <Header>あなたの情報を入力してください</Header>
      <div className="name-box">
        <Header>名前</Header>
        <InputLabel label="姓" required name="firstName" />
        <InputLabel label="名" required name="secondName" />
        <InputLabel label="氏（カタカナ）" required name="firstName-katakana" />
        <InputLabel label="名（カタカナ）" required name="lastName-katakana" />
      </div>
      <div className="gender-age-box">
        <Header>年齢・性別</Header>
        <div>
          <Label required>性別</Label>
          <RadioLabel label="男性" name="male" />
          <RadioLabel label="女性" name="female" />
          <RadioLabel label="無回答・その他" name="no-answer" />
        </div>
        <div>
          <InputLabel
            label="年齢"
            required
            name="age"
            inputClassName="gender-age-box__age"
          />
        </div>
      </div>
    </main>
  );
}
