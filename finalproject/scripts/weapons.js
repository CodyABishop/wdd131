let d = new Date();
document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()}`;
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;

const hambutton = document.querySelector('#hambutton');

hambutton.addEventListener('click', () => {
  document.querySelector('h1').classList.toggle('show');
  document.querySelector('#navmenu').classList.toggle('show');
  hambutton.classList.toggle('show');
});

function toggleActive(element) {
    element.classList.toggle("active");
}

const weapons = [
    {
        weaponName: "Greatsword",
        weaponWeight: "Heavy",
        weaponReach: "Melee",
        weaponStyle: "Simple",
        weaponDescription: "Large and in charge, the Greatsword excels at hit and run attacks, as well as perfectly timed punishment on Monsters. Capable of blocking.",
        imageUrl:
            "images/01_a.webp"
    },
    {
        weaponName: "Longsword",
        weaponWeight: "Light",
        weaponReach: "Melee",
        weaponStyle: "Simple",
        weaponDescription: "Don't be fooled by the size of this weapon, the Longsword can put out a series of high speed combo swings that'll leave the Monster wondering what hit it.",
        imageUrl:
            "images/02_a.webp"
    },
    {
        weaponName: "Sword and Shield",
        weaponWeight: "Light",
        weaponReach: "Melee",
        weaponStyle: "Versatile",
        weaponDescription: "Alpha and Omega, the perfect weapon for any new Hunter to start out with. The Sword and Shield is capable of delivering both Blunt and Slash damage, and can even use items while the weapon is drawn.",
        imageUrl:
            "images/03_a.webp"
    },

    {
        weaponName: "Dual Blades",
        weaponWeight: "Light",
        weaponReach: "Melee",
        weaponStyle: "Simple",
        weaponDescription: "Unleash your Inner Demon! The Dual Blades excel at evasive maneuvers and suit anyone who doesn't care to plan what to do next. You can use Demon Mode to amplify your strikes.",
        imageUrl:
            "images/04_a.webp"
    },
    {
        weaponName: "Hammer",
        weaponWeight: "Light",
        weaponReach: "Melee",
        weaponStyle: "Simple",
        weaponDescription: "What looks heavy, feels heavy. The hammer is capable of stunning monsters, and allows for a surprising amount of mobility for the bulk of the weapon. ",
        imageUrl:
            "images/05_a.webp"
    },
    {
        weaponName: "Hunting Horn",
        weaponWeight: "Heavy",
        weaponReach: "Melee",
        weaponStyle: "Versatile",
        weaponDescription: "Band Class Valedictorian. The Hunting Horn allows you to buff party members and lay the hurt on monsters.",
        imageUrl:
            "images/06_b.webp"
    },
    {
        weaponName: "Lance",
        weaponWeight: "Heavy",
        weaponReach: "Melee",
        weaponStyle: "Simple",
        weaponDescription: "If you don't bleed, it can't kill you. The lance is the ultimate defensive weapon, between parries and a nearly unbreakable guard, you won't go down easy with this weapon!",
        imageUrl:
            "images/07_a.webp"
    },
    {
        weaponName: "Gunlance",
        weaponWeight: "Heavy",
        weaponReach: "Melee",
        weaponStyle: "Versatile",
        weaponDescription: "This is my boomstick! The Gunlance allows players to venture more into the offensive side of a defensive playstyle. With several different shell types and moves featuring the titular 'Gun'lance, you'll blow the Monster away.",
        imageUrl:
            "images/08_b.webp"
    },
    {
        weaponName: "Switch Axe",
        weaponWeight: "Medium",
        weaponReach: "Melee",
        weaponStyle: "Versatile",
        weaponDescription: "My Axe is my Sword! One of two morphing weapons, the Switch Axe is capable of striking high and slow, or low and fast. Charge up the Sword's Amp Gauge to lay the hurt on the Monster, or send it reeling with an explosive discharge!",
        imageUrl:
            "images/09_b.webp"
    },
    {
        weaponName: "Charge Blade",
        weaponWeight: "Medium",
        weaponReach: "Melee",
        weaponStyle: "Versatile",
        weaponDescription: "My Sword (and Board) is my Axe! The Charge Blade is the Switch Axe's more defensive minded cousin, but don't let that fool you. Charge phials in Sword Mode, and lay the smackdown on those Monsters in Axe Mode!",
        imageUrl:
            "images/10_a.webp"
    },
    {
        weaponName: "Insect Glaive",
        weaponWeight: "Light",
        weaponReach: "Melee",
        weaponStyle: "Simple",
        weaponDescription: "A Frenchman's Favorite. The Insect Glaive is the only weapon capable of launching itself into the air at will. Its titular K'insect' allows you to steal buffs from parts of the monster, and amplify your own power!",
        imageUrl:
            "images/11_a.webp"
    },
    {
        weaponName: "Light Bowgun",
        weaponWeight: "Light",
        weaponReach: "Ranged",
        weaponStyle: "Versatile",
        weaponDescription: "This is my Rifle. The Light Bowgun is what it says on the tin, a light ranged weapon. With its multitude of ammo types, you can build any which way to shoot your way to victory. ",
        imageUrl:
            "images/12_a.webp"
    },
    {
        weaponName: "Heavy Bowgun",
        weaponWeight: "Heavy",
        weaponReach: "Ranged",
        weaponStyle: "Versatile",
        weaponDescription: "This is my Gun. The Heavy Bowgun is the Light Bowgun's fatter cousin, but with that added bulk comes a whole lot of damage. While less mobile, the Heavy Bowgun can load special munitions, such as a high powered sniper round, or a Rambo Machine Gun.",
        imageUrl:
            "images/13_a.webp"
    },
    {
        weaponName: "Bow",
        weaponWeight: "Light",
        weaponReach: "Ranged",
        weaponStyle: "Simple",
        weaponDescription: "A Regular Robin Hood. The Bow is a simple ranged weapon, though that doesn't mean it doesn't have nuance. Specializing in the Application of Statuses and Damage, the bow is a good choice for someone who doesn't want to manage ammo. ",
        imageUrl:
            "images/14_a.webp"
    },
]

createWeaponCard(weapons);

const unfilteredLink = document.querySelector("#unfiltered");
const heavyLink = document.querySelector("#heavy");
const lightLink = document.querySelector("#light");
const versatileLink = document.querySelector("#versatile");
const simpleLink = document.querySelector("#simple");
const meleeLink = document.querySelector("#melee");
const rangedLink = document.querySelector("#ranged");

unfilteredLink.addEventListener ("click", () => {
  createWeaponCard(weapons);
});

heavyLink.addEventListener("click", () => {
  createWeaponCard (weapons.filter(weapon => weapon.weaponWeight.includes("Heavy")));
});

lightLink.addEventListener("click", () => {
  createWeaponCard (weapons.filter(weapon => weapon.weaponWeight.includes("Light")));
});
versatileLink.addEventListener("click", () => {
  createWeaponCard (weapons.filter(weapon => weapon.weaponStyle.includes("Versatile")));
});

simpleLink.addEventListener("click", () => {
  createWeaponCard (weapons.filter(weapon => weapon.weaponStyle.includes("Simple")));
});

meleeLink.addEventListener("click", () => {
    createWeaponCard (weapons.filter(weapon => weapon.weaponReach.includes("Melee")));
});

rangedLink.addEventListener("click", () => {
    createWeaponCard (weapons.filter(weapon => weapon.weaponReach.includes("Ranged")));
});


function createWeaponCard(filteredWeapons) {
    document.querySelector(".res-grid").innerHTML = "";
    filteredWeapons.forEach(weapon => {
      let card = document.createElement("section");
      let name = document.createElement("h4");
      let weaponWeight = document.createElement("p");
      let weaponReach = document.createElement("p");
      let weaponStyle = document.createElement("p");
      let weaponDescription = document.createElement("p");
      let img = document.createElement("img");
  
      name.textContent = weapon.weaponName;
      weaponWeight.innerHTML = `<span class="label">Weight:</span> ${weapon.weaponWeight}`;
      weaponReach.innerHTML = `<span class="label">Reach:</span> ${weapon.weaponReach}`;
      weaponStyle.innerHTML = `<span class="label">Style:</span> ${weapon.weaponStyle}`;
      weaponDescription.innerHTML = `<span class="label">Description:</span> ${weapon.weaponDescription}`;
      img.setAttribute("src", weapon.imageUrl);
      img.setAttribute("alt", `${weapon.weaponName}`);
      img.setAttribute("loading", "lazy");
  
      card.appendChild(name);
      card.appendChild(weaponWeight);
      card.appendChild(weaponReach);
      card.appendChild(weaponStyle);
      card.appendChild(weaponDescription);
      card.appendChild(img);
  
      document.querySelector(".res-grid").appendChild(card);
    });
}

let visitCountWeapons = localStorage.getItem('visitCountWeapons');


if (visitCountWeapons === null) {
  visitCountWeapons = 1;
  localStorage.setItem('visitCountWeapons', visitCountWeapons);
} else {
  
  visitCountWeapons = parseInt(visitCountWeapons) + 1;
  localStorage.setItem('visitCountWeapons', visitCountWeapons);
}
let visitCountWeaponsElement = document.getElementById('visit-count-weapons');


visitCountWeaponsElement.textContent = `You have visited this site ${visitCountWeapons} times.`;