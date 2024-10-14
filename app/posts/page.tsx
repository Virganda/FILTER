import data from "../../public/data/data.json"; // Mengimpor data JSON
import CardList from "../components/Posts/CardList";
import ViewUserButton from "../components/Posts/ViewUserButton";

// Interface untuk data pengguna
interface IUser {
  id: number;
  name: string;
  hobbies?: { id: number; name: string }[];
  age: number;
  address: string;
  city: string;
  phone: string;
}

const UserList = () => {
  const users: IUser[] = data;

  //Tugas 1 : Dapatkan Semua Data
  const getAll = () =>users;

  //Tugas 2 : Dapatkan Berdasarkan Nama Tertentu
  const getNama =  (name: string) => {
    return users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
  };

  //Tugas 3 : Dapatkan Data Yang Beralamat
  const getAddress = (city: string) => {
    return users.filter(user => user.city.toLowerCase() === city.toLowerCase());
  };

  //Tugas 4 : Dapatkan Data Yang Berumur Lebih Dari Minimum Age
  const getAge = (minAge: number) => {
    return users.filter(user => user.age >= minAge);
  };

  //Filterisasi Data
  const Allusers = getAll();
  const nameJohn = getNama("John");
  const addressNewYork = getAddress("New York");
  const JohnAge = getAge(30);

  return (
    <>
      <p>{new Date().toLocaleTimeString()}</p>
      <h1 className="text-fuchsia-500">HALAMAN PENGGUNA</h1>
      <center><h3>TAMPIL SEMUA DATA</h3></center>
      {users.map((user) => (
        <CardList key={user.id}>
          <p>Name: {user.name}</p>
          {user.hobbies && user.hobbies.length > 0 && (
            <p>Hobbies: {user.hobbies.map(hobby => hobby.name).join(", ")}</p>
          )}
          <p>Age: {user.age}</p>
          <p>Address: {user.address}</p>
          <p>City: {user.city}</p>
          <p>Phone: {user.phone}</p>
          <ViewUserButton userId={user.id} />
        </CardList>
      ))}
      <center><h3>TAMPIL DATA DENGAN NAMA TERTENTU ("Jhon")</h3></center>
      {nameJohn.map((user) => (
        <CardList key={user.id}>
          <p>Name: {user.name}</p>
          {user.hobbies && user.hobbies.length > 0 && (
            <p>Hobbies: {user.hobbies.map(hobby => hobby.name).join(", ")}</p>
          )}
          <p>Age: {user.age}</p>
          <p>Address: {user.address}</p>
          <p>City: {user.city}</p>
          <p>Phone: {user.phone}</p>
          <ViewUserButton userId={user.id} />
        </CardList>
      ))}
      <center><h3>TAMPIL DATA DENGAN ALAMAT NEW YORK</h3></center>
      {addressNewYork.map((user) => (
        <CardList key={user.id}>
          <p>Name: {user.name}</p>
          {user.hobbies && user.hobbies.length > 0 && (
            <p>Hobbies: {user.hobbies.map(hobby => hobby.name).join(", ")}</p>
          )}
          <p>Age: {user.age}</p>
          <p>Address: {user.address}</p>
          <p>City: {user.city}</p>
          <p>Phone: {user.phone}</p>
          <ViewUserButton userId={user.id} />
        </CardList>
      ))}
      <center><h3>TAMPIL DATA DENGAN UMUR LEBIH DARI 30 TAHUN</h3></center>
      {JohnAge.map((user) => (
        <CardList key={user.id}>
          <p>Name: {user.name}</p>
          {user.hobbies && user.hobbies.length > 0 && (
            <p>Hobbies: {user.hobbies.map(hobby => hobby.name).join(", ")}</p>
          )}
          <p>Age: {user.age}</p>
          <p>Address: {user.address}</p>
          <p>City: {user.city}</p>
          <p>Phone: {user.phone}</p>
          <ViewUserButton userId={user.id} />
        </CardList>
      ))}
    </>
  );
};

export default UserList;
