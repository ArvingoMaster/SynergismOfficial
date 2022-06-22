import { DOMCacheGetOrSet } from './Cache/DOM';
const coinText = `
Welcome to Synergism! Here is where you start of course. The start is very simple, use coins to buy buildings and 
upgrades that produce even more coins! Keep doing it until you can do the next feature, you will know when you can see it. :)`
const diamondText = `
Congrats! You have prestiged! Prestiging for the first time unlocks the Diamond layer, which consists of Diamond buildings, 
Diamond upgrades, automation upgrades (for your QoL needs), generator upgrades (powerful), and last but not least RUNES!
Runes will be talked about in a different section.
The diamond upgrades themselves are pretty decent, but a good amount of boost comes from the Diamond buildings! Once bought,
the first tier will make crystals which will boost coin production and every tier after will produce the tier before.
The final item unlocked is a new "prestige" layer, accelerator boosts! They will reset diamond upgrades and your diamonds (NOT
GENERATOR UPGRADES, AUTOMATION, or DIAMOND BUILDINGS) in exchange for a boost to your accelerators. This can be useful at times but
generally resetting more than 3-4 times is not necessary.
`
const runeText = `
By prestiging for the first time you also unlock runes! You gain offerings via how long you spend in some type of resets 
and are boosted via upgrades and other ways. When used on a rune, they get transfered into rune exp, which with enough rune exp you
can level a rune and gain powerful bonuses! Check each specific rune for the details on the boosts they give! Runes
are unlocked mostly via achievements so keep an eye out for new runes that can give different buffs (but more expensive...).
Rune recycle chance is a chance to recycle an offering so it isn't used! This feature isn't actually in-game though, so instead
it gives a multi to rune exp. Good enough for me anyways!

`
const mythosText = `
Welcome to another reset tier, transcension! You reset all of your previous coin and diamond stuff and turn them into mythos
which can be used for mythos buildings, more generator upgrades, more automation, and mythos upgrades! By transcending for the 
first time you also unlock a new tab, CHALLENGES! They are explained in their own section. Mythos buildings are used to get mythos shards
which are required for the next reset tier as you can see (Reincarnation) but they also give multiplier boosts to help you get back up
to speed! However, don't spend all of your mythos! Some mythos upgrades boost based on unspent mythos. Have fun!

`
const challengeText = `Welcome to the challenges section!
Challenges makes the game harder depending on which one are you one (currently you have 5, you will get more).
Some block a feature (like no accelerators), and some reduce a feature (like reduced diamonds).
They also give rewards per completion and for first, so remember to do them often to get rewards! :)
For more information, check the description of every individual challenge in the challenge tab.
At the current moment, you generally can't get more than e6-7 mythos without doing challenges, so don't be afraid to do them!
`
const associated = new Map<string, string>([
    ['helpCoin', coinText],
    ['helpDiamond', diamondText],
    ['helpRune', runeText],
    ['helpMythos', mythosText],
    ['helpChallenge', challengeText]   
]);
export const displayHelp = (btn: HTMLElement) => {
    for (const e of Array.from(btn.parentElement!.children) as HTMLElement[]) {
        e.style.backgroundColor = (e.id !== btn.id ? '' : 'crimson');
    }
    DOMCacheGetOrSet('helpText').textContent = String(associated.get(btn.id))
}