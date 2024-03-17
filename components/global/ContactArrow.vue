<template>
  <div data-duration=".5s" data-delay=".15s" class="menu-pos anim">
    <div class="menu-cont">
      <a class="menu" href="#contact"
        >Contact
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
          <path d="M9.4 18 8 16.6l4.6-4.6L8 7.4 9.4 6l6 6Z" />
        </svg>
      </a>
    </div>
  </div>
</template>

<style lang="postcss">
.menu-pos:hover {
  svg {
    @apply fill-yellow-600;
  }
}
.menu-pos {
  svg {
    @apply fill-white transition;
  }
  @apply flex items-start justify-end;
  .menu-cont {
    @apply flex flex-col justify-end content-start items-start;
    .arrow {
      @apply flex opacity-100 justify-end relative;
      @apply before:transition before:absolute before:content-[""] before:block before:ml-1 before:w-[9px] before:border-b-2 before:rounded-sm before:rotate-45 before:-left-[3px] before:bottom-[3px];
      @apply after:transition after:content-[""] after:block after:ml-1 after:border-b-2 after:rounded-sm after:-rotate-45 after:absolute after:top-[5px] after:-left-[3px] after:bottom-[3px] after:w-[9px] after:h-[2px];
    }
    a {
      @apply text-yellow-600 box-border no-underline flex items-center justify-center before:content-none;
      @apply before:content-[""] before:box-border before:w-32 before:block before:mr-2 before:border-b-2 before:border-white hidden sm:flex;
      @apply hover:before:border-b-2 hover:before:border-yellow-600;
      &:hover {
        .arrow {
          @apply before:border-b-2 before:border-yellow-600;
          @apply after:border-r-2 after:border-t-2 after:border-yellow-600;
        }
      }
    }
  }
}
</style>
