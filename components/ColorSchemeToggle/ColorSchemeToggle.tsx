import { useMantineColorScheme, ActionIcon, Group } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

const ColorSchemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position="center" my="xl">
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="lg"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          color: theme.colorScheme === 'dark' ? theme.colors.gray[2] : theme.colors.dark[6],
        })}
      >
        {colorScheme === 'dark' ? <IconSun size={18} /> : <IconMoonStars size={18} />}
      </ActionIcon>
    </Group>
  );
};

export default ColorSchemeToggle;