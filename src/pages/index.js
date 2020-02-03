import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Image } from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"

const Page = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 5rem 0;
  border-bottom: 1px solid grey;
  font-size: 1.5rem;
  line-height: 2;
`
const Text = styled.p`
  flex: 1;
  display: flex;
  justify-content: center;
`
const Block = styled.div`
  flex: 1;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Page>
      <Block>
        <Image name="cover" />
      </Block>
    </Page>

    <Page>
      <Text>
        Hector is a little dinosaur
        <br />
        Who lives in the forest
        <br />
        He spends all his days eating flowers
        <br />
        And rest.
      </Text>
      <Block>
        <Image name="page_1" />
      </Block>
    </Page>
    <Page>
      <Text>
        But you see, poor Hector
        <br />
        Is very very slow.
        <br />
        Flowers are not so tasty
        <br />
        But what else could he eat?
      </Text>
      <Block>
        <Image name="page_2" />
      </Block>
    </Page>
    <Page>
      <Text>
        One day, he founds a carrot.
        <br />
        Looking around him he wonders:
        <br />
        Can you see anyone who might steal his food?
        <br />
        Hopefully no one.
      </Text>
      <Block>
        <Image name="page_4" />
      </Block>
    </Page>
    <Page>
      <Text>
        Oh no! A rabbit! Now he wants the carrot.
        <br />
        Please don’t! Beg Hector, leave it to me.
        <br />
        But who’s going to be faster,
        <br />
        The Dino or the bunny?
      </Text>
      <Block>
        <Image name="page_5" />
      </Block>
    </Page>
    <Page>
      <Text>Oh nooo, Hector has been too slow...</Text>
      <Block>
        <Image name="page_6" />
      </Block>
    </Page>
    <Page>
      <Text>
        Later, on top of a rock, he’s searching
        <br />
        What else could he eat?
        <br />
        Something sweet and juicy, he’s thinking.
        <br />
        But can you see anything?
      </Text>
      <Block>
        <Image name="page_7" />
      </Block>
    </Page>
    <Page>
      <Text>
        Oh look, an apple!
        <br />
        That must be good.
        <br />
        Can you see anyone
        <br />
        Who might steal his food?
      </Text>
      <Block>
        <Image name="page_8" />
      </Block>
    </Page>
    <Page>
      <Text>
        Hi Bear. How are you? asks Hector.
        <br />
        I’m hungry, said the Bear.
        <br />
        Me too, replies Hector.
        <br />
        Let’s see who can get this apple first then, says Bear.
      </Text>
      <Block>
        <Image name="page_9" />
      </Block>
    </Page>
    <Page>
      <Text>
        Without even time to look up
        <br />
        Bear is already eating the fruit
        <br />
        Hector has been too slow again.
      </Text>
      <Block>
        <Image name="page_10" />
      </Block>
    </Page>
    <Page>
      <Text>
        He walks some more and... oh look, a salad!
        <br />
        That must be good.
        <br />
        Hopefully no one will steal his food.
        <br />
        Who else might want this salad?
      </Text>
      <Block>
        <Image name="page_11" />
      </Block>
    </Page>

    <Page>
      <Text>
        Oh, hi Snail. How are you?
        <br />
        I’m very hungry, says Snail. I haven’t eaten in days!
        <br />
        I see, replies Hector, shall we share then?
        <br />
        Only if you can be faster than me!
      </Text>
      <Block>
        <Image name="page_12" />
      </Block>
    </Page>
    <Page>
      <Text>
        Hector is ready to run.
        <br />
        He’s never been so ready.
        <br />
        Just a few more steps.
        <br />
        But the snail is getting closer.
      </Text>
      <Block>
        <Image name="page_13" />
      </Block>
    </Page>
    <Page>
      <Text>
        Hector moves another paw.
        <br />
        But the snail is much faster.
      </Text>
      <Block>
        <Image name="page_14" />
      </Block>
    </Page>
    <Page>
      <Text>
        If you don’t finish it
        <br />
        We could be friends!
        <br />
        Tries Hector one more time
        <br />
        Desperately...
      </Text>
      <Block>
        <Image name="page_15" />
      </Block>
    </Page>
    <Page>
      <Text>
        Once again, Hector was too slow
        <br />
        There’s nothing left
        <br />
        The salad is gone
        <br />
        And the snail too has left
      </Text>
      <Block>
        <Image name="page_16" />
      </Block>
    </Page>
    <Page>
      <Text>
        When a little mouse,
        <br />
        Who just watched what happened
        <br />
        Comes to offer him a nut
        <br />I can give you more, if you’ll be my protector
      </Text>
      <Block>
        <Image name="page_17" />
      </Block>
    </Page>
    <Page>
      <Text>
        Hector is not alone anymore
        <br />
        He is so happy!
        <br />
        Hopefully no one will still his new friend
        <br />
        Can you see anybody?
      </Text>
      <Block>
        <Image name="page_18" />
      </Block>
    </Page>
    <Page>
      <Text>
        Oh no, a fox! This mouse looks yummy
        <br />
        Do you mind to share with me?
        <br />
        Well, answer Hector, if you want it
        <br />
        You’ll have to do something for me
      </Text>
      <Block>
        <Image name="page_19" />
      </Block>
    </Page>
    <Page>
      <Text>
        I was about to eat this mouse but
        <br />
        I think those nuts taste much better
        <br />
        Go! I hold the mouse, you get the nut
        <br />
        Right behind you, tell me, is it tasty?
      </Text>
      <Block>
        <Image name="page_20" />
      </Block>
    </Page>
    <Page>
      <Text>
        Did you just play a trick on me? Says Fox.
        <br />
        Where is the mouse, I want to know!
        <br />
        I’m sorry, Hector answers the Fox
        <br />I ate it all, you’re too slow!
      </Text>
      <Block>
        <Image name="page_21" />
      </Block>
    </Page>
    <Page>
      <Text>That was the beginning of a beautiful friendship.</Text>
    </Page>
    <Image name="end" />
  </Layout>
)

export default IndexPage
