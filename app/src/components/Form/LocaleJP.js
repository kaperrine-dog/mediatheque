export const LocaleJP = {
  mixed: {
    default: '${path}は無効です',
    required: '${path}は必須フィールドです',
    oneOf: '${path}は次の値のいずれかでなければなりません:${values}',
    notOneOf: '${path}は次の値のいずれかであってはなりません:${values}',
  },
  string: {
    length: '${path}は正確に${length}文字でなければなりません',
    min: '${path}は少なくとも${min}文字以上でなければなりません',
    max: '${path}は最大${max}文字以下でなければなりません',
    matches: '${path}は次と一致する必要があります: "${regex}"',
    email: '${path}はメールアドレス形式である必要があります',
    url: '${path}は有効なURLでなければなりません',
    trim: '${path}はトリミングされた文字列でなければなりません',
    lowercase: '${path}は小文字の文字列でなければなりません',
    uppercase: '${path}は大文字の文字列でなければなりません',
  },
  number: {
    min: '${path}は${min}以上である必要があります',
    max: '${path}は${max}以下でなければなりません',
    lessThan: '${path}は${less}より小さくなければなりません',
    moreThan: '${path}は${more}より大きくなければなりません',
    notEqual: '${path}は${notEqual}と等しくない必要があります',
    positive: '${path}は正の数でなければなりません',
    negative: '${path}は負の数でなければなりません',
    integer: '${path}は整数でなければなりません',
  },
  date: {
    min: '${path}フィールドは${min}より後でなければなりません',
    max: '${path}フィールドは${max}より前でなければなりません',
  },
  object: {
    noUnknown: '${path}フィールドには,オブジェクトシェイプで指定されていないキーを含めることはできません',
  },
  array: {
    min: '${path}フィールドには少なくとも${min}の項目が必要です',
    max: '${path}フィールドには${max}以下の項目が必要です',
  },
};
