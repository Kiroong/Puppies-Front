export interface Puppy {
  name: string;
  accessKey: string;
  users: {
    id: string,
    passwordHashed: string
  }[];
}

export const deafultPuppy: Puppy = {
  name: '익명의 강아지',
  accessKey: '접근키 없음',
  users: []
};

export function initializePuppy(puppy) {
  return {
    ...deafultPuppy,
    ...puppy
  };
}
