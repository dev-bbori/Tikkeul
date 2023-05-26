package com.tikkeul.app.dao;

import com.tikkeul.app.domain.dto.FileDTO;
import com.tikkeul.app.domain.vo.FileVO;
import com.tikkeul.app.domain.vo.ItemFileVO;
import com.tikkeul.app.mapper.FileMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class FileDAO {
    private final FileMapper fileMapper;

//    열매샵 파일조회
    public List<FileDTO> findAll(Long itemId){
        return fileMapper.selectAll(itemId);
    }

}
