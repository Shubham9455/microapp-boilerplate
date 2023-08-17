import { FC } from 'react';
import {
  Select,
  TextInput,
  Box,
  Flex,
  NumberInput,
  Textarea,
  Divider,
  Text,
  Grid,
  Button,
  CopyButton,
} from '@mantine/core';

import { useForm } from '@mantine/form';
import MagicStickyIcon from './../images/magic-sticky.svg';
import CopyIcon from './../images/copy.svg';

import Image from 'next/image';

const Home: FC = () => {
  const form = useForm({
    initialValues: {
      text: '',
      number: 1,
      dropdown: '',
      textarea: '',
    },
    validate: {
      text: (value) => !value.trim().length,
    },
  });

  return (
    <Grid h={'100%'} mt={0} mb={0}>
      <Grid.Col
        sx={(theme) => ({
          boxShadow: theme.shadows.md,
          backgroundColor: theme.colors.light[1],
          borderRight: '1px solid',
          borderColor: theme.colors.light[2],
        })}
        sm={6}
      >
        <Box py={24} px={'16px'} w={{ base: '100%' }}>
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <TextInput
              mb={'24px'}
              placeholder="Input Text"
              label="Input Text"
              {...form.getInputProps('text')}
            />

            <Divider mb="24px" />

            <Select
              w="100%"
              data={['Option 1', 'Option 2', 'Option 3']}
              placeholder="E.g Option 1, Option 2, Option 3"
              mb={'24px'}
              label="Dropdown"
              {...form.getInputProps('dropdown')}
            />

            <Divider mb="24px" />

            <NumberInput
              w="100%"
              mb={'24px'}
              min={1}
              label="Number"
              {...form.getInputProps('number')}
            />

            <Divider mb="24px" />

            <Textarea
              autosize
              minRows={3}
              mb={'24px'}
              placeholder="Textarea"
              label="Textarea"
              {...form.getInputProps('textarea')}
            />

            <Divider mb="24px" />

            <Flex justify="flex-end">
              <Button
                disabled={!form.isValid()}
                size="md"
                color="violet"
                type="submit"
              >
                <Image
                  alt="icon"
                  width={14}
                  height={14}
                  src={MagicStickyIcon}
                />
                <Text ml="6px">Submit Button</Text>
              </Button>
            </Flex>
          </form>
        </Box>
      </Grid.Col>
      <Grid.Col sm={6}>
        <Box p="20px">
          <Flex mt="112px" direction="column" justify="center" align="center">
            <CopyButton value="Text to be copied">
              {({ copied, copy }) => (
                <Button
                  mb={50}
                  size="sm"
                  px={8}
                  variant="default"
                  onClick={copy}
                >
                  <Image
                    alt="Copy icon"
                    width={12}
                    height={12}
                    src={CopyIcon}
                  />
                  <Text ml="6px">{copied ? 'Copied' : 'Copy'}</Text>
                </Button>
              )}
            </CopyButton>
            <Text size="14px" color="#202123">
              Right Side Content
            </Text>
          </Flex>
        </Box>
      </Grid.Col>
    </Grid>
  );
};

export default Home;
