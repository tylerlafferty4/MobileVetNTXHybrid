import { Component } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular';

@Component({
  selector: 'page-services',
  templateUrl: 'services.html'
})
export class ServicesPage {

  background = '#50095f';

  shownGroup = null;

  services = [
    { title: "Wellness/Preventive Care", description: "We strive to provide more years with your pet and your furry family members by offering the best in preventative medicine and wellness care. Not only are vaccinations important for preventing disease, but also early disease screening, heartworm and parasite prevention. We offer prophylactic dental cleanings, and have access to a full in house lab and an external lab that can do all health screening and testing."},
    { title: "Cold Laser Therapy", description: "Cold Laser is a state-of-the-art alternative therapy to assist with pain and healing. It can be used after surgeries to help increase blood flow to local areas, improving healing. It can also be used for chronic pain, helping to increase blood flow to those areas. Ask us how your pet would benefit from our Cold Laser Therapy."},
    { title: "In-House Bloodwork", description: "Our in-house laboratory allows us to perform an array of diagnostic tests that help us care for your pet. This ranges from simple laboratory tests to more complex diagnostic tools that help us in treating your pet. Call us today to find out more about our facilities and how we are dedicated to providing care for your pet."},
    { title: "Home Hospice/Euthanasia", description: "For those moments that no pet owner wants to think about but is the inevitable. We offer private, low stress and compassionate Euthanasia services. Perfect for those pets that are unable to stand anymore, or those that get stressed/painful in the car. We know how important the comfort and well being of your beloved pet is especially at this time. Cremation and Burial services are available."},
    { title: "Mobile X-Rays", description: "Something unique to this Mobile Veterinary Clinic is the access to Digital X-Ray and the information that X-rays provide. We can detect chest abnormalities, abdominal abnormalities, orthopedic injuries, fractures, foreign bodies, bone cancer, and we can provide OFA hip and elbow X rays, screen for number and size of puppies, the sky’s the limit!!"},
    { title: "Ultrasonogrophy", description: "We are so proud to offer this service to our clients. This technology helps us diagnose tough abdominal cases, helps us diagnose cancer, bladder abnormalities and also helps us diagnose pregnancy."},
    { title: "Mobile Surgery", description: "We are proud to offer surgical services to our clients in our own seperate surgical suite. Spays and neuters, C-Sections, mass removals and other minor soft tissue surgeries available. Safe modern anesthesia used, appropriate protocols for the age of the patient, appropriate monitoring and quick recovery is our goal. Gas anesthesia and monitoring used in every procedure and pre-surgical labwork additional pain meds, and E collars are required for each surgery. We do not scrimp on safety and quality of care."},
    { title: "Mobile Dentistry", description: "Mobile Veterinary Clinic of North Texas comes to your door fully equipped to do Dental procedures including ultrasonic scaling, dental extractions, polishing and flouride treamtents. If your pet needs a prophylactic dental cleaning to prevent disease of the kidneys and heart we can schedule it for you. All dentals require pre-anesthetic bloodwork, and if needed will go home with appropriate pain medications and antibiotics."},
    { title: "Special Events", description: "Do you have a Special Event that will need Veterinary services? Do you and and few of your friends have several pets/animals that need things done? Want to organize a feral cat spay and neuter event?? We offer a service for those clients that want to get several people together in underserved areas (or out of our normal travel area) that need veterinary attention. We will schedule the events on weekends to better serve these areas. Depending on the size and number we can open it up to a Saturday AND Sunday event if the need arises."},
    { title: "Emergencies", description: "We are unable to offer after hours emergency services anymore due to large service area we provide services to. If your pet has an emergency please seek a local 24 hour emergency care clinic for afterhours care."}
  ];

  constructor(public navCtrl: NavController) {

  }

  ionViewDidEnter() {
    var t: Tabs = this.navCtrl.parent;
    t.select(2);
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
  };
  isGroupShown(group) {
      return this.shownGroup === group;
  };

}
