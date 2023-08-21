class Person {
    private String firstName;
    private String lastName;
    private String profession;
  public Person(String firstName,String  lastName,String profession) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
  }


  public String getFirstName() {
    return this.firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }
}

Person p=new Person("Chris", "Lis", "Dev");
